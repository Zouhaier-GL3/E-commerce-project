import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';


import { NewproductComponent } from './newproduct/newproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { VendeurrequestComponent } from './vendeurrequest/vendeurrequest.component';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/guard/admin.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/guard/auth.guard';


const appRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] ,children: [//
      {
        path: 'categories', component: CategorieComponent,canActivate: [AdminGuard] ,
      },
      {
        path: 'analytics', component: CategorieComponent
      },
      {
        path: 'gest/vendeurs', component: SellerComponent ,canActivate: [AdminGuard] ,
      },
      {

        path: 'gest/comptes', component: AdminComponent, canActivate: [AdminGuard] ,
      },
      {
        path: 'analytics', component: ListproductComponent
      },
      {
        path: 'newproduct', component: NewproductComponent 
      },
 
        
      {
        path: 'listproduct', component: ListproductComponent
      }, 
         
      {
        path: 'demande_vente', component: VendeurrequestComponent ,canActivate: [AdminGuard] ,
      }, 
    ]
  }

]
 
@NgModule({
  declarations: [NewproductComponent, ListproductComponent, CategorieComponent, AdminComponent, SellerComponent, VendeurrequestComponent],
  imports: [
    CommonModule,
    DataTablesModule ,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) ,
  ]
})
export class DashboardModule { }
