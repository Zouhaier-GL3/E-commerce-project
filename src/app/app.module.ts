import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProviderComponent } from './components/provider/provider.component';
import { CategoryComponent } from './components/category/category.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CartComponent } from './components/cart/cart.component';
import { NotAuthGuard } from './guard/not-auth.guard';
import { AuthGuard } from './guard/auth.guard';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ShopComponent } from './components/shop/shop.component';
import { PackComponent } from './pack/pack.component';
import { CategorieComponent } from './components/dashboard/categorie/categorie.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'profile', component: ProfilComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent },
  { path: 'vente_req', component: ProviderComponent },
  { path: 'details/:id', component: ProductComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'categorie', component: CategorieComponent},
  { path: 'product', component: ProductComponent},



  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ProductComponent,
    CustomerComponent,
    ProviderComponent,
    CategoryComponent,
    DeliveryComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    CartComponent,
    ShopComponent,
    PackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule ,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
