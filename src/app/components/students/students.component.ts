import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../../services/students.service';
import { NgForm } from '@angular/forms';
import { Students } from '../../models/students';

declare var M: any;

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [ StudentsService ]
})
export class StudentsComponent implements OnInit {

  students
  addform = false
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudentss().subscribe(data=>
      this.students=data

    )};

  addstudents(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.studentsService.putStudents(form.value)
        .subscribe(res => {

          this.resetForm(form);
          this.getstudentss();
          M.toast({html: 'Updated Successfully'});
          this.addform=false
        });
    } else {
      this.studentsService.postStudents(form.value)
      .subscribe(res => {
        this.addform=false
        this.getstudentss();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }

  }

  getstudentss() {
    this.studentsService.getStudentss()
      .subscribe(res => {
        this.studentsService.Studentss = res as Students[];
      });
  }

  editstudents(students: Students) {
    this.studentsService.selectedStudents = students;
  }

  deletestudents(_id: string) {
    console.log(_id)
    if(confirm('Are you sure you want to delete it?')){
      this.studentsService.deleteStudents(_id)
        .subscribe(res => {
          console.log(res)
          this.studentsService.getStudentss().subscribe(data=>
            this.students=data

          )
           M.toast({html: 'Deleted Succesfully'});
        },err => {
          console.log(err)
        });
    }
  }
  showaddForm(){
    this.addform=true
  }
  resetForm(form) {
    if (form) {
      form.reset();
      this.studentsService.selectedStudents = new Students();
    }
  }

}
