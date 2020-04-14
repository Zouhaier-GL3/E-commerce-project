import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { ProductComponent } from './components/product/product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProviderComponent } from './components/provider/provider.component';
import { CategoryComponent } from './components/category/category.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ProductComponent,
    CustomerComponent,
    ProviderComponent,
    CategoryComponent,
    DeliveryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
