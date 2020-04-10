import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Students } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  selectedStudents: Students;
  Studentss: Students[];

  readonly URL_API = 'http://localhost:3000/api/students';

  constructor(private http: HttpClient) {
    this.selectedStudents = new Students();
  }

  postStudents(Students: Students) {
    return this.http.post(this.URL_API+'/add', {name : Students.name ,phone : Students.phone , message : Students.message});
  }

  getStudentss() {
    return this.http.get(this.URL_API+'/list');
  }

  putStudents(Students: Students) {
    return this.http.put(this.URL_API + `/${Students._id}`, Students);
  }

  deleteStudents(_id: string) {
    return this.http.delete(this.URL_API + "/" + _id);
  }
}
