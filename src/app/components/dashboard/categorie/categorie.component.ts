import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  
  listCat =[] ;
  listSub=[];
  dtOptions: DataTables.Settings = {};
   // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<Product> = new Subject();

  constructor(private userService : UserService,private authServ :AuthenticationService,private serviceCat : CategoryService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.getlistCat();
  }
  suppAdmin(item){
    this.serviceCat.delete(item._id).subscribe(data=>{
      console.log(data)
      this.getlistCat()
    })
  }
  getlistCat(){
    this.serviceCat.getAllCategories()
     
      .subscribe(data => {
        this.listCat = data as [];
        console.log(data)
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }
  getlistSub(cat){
    this.listSub=[] ;
    this.serviceCat.getSubCategoriesByCategory(cat._id).subscribe(data=>{
      this.listSub=data as []
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  ajoutercat(){

  }

}
