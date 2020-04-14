import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  selectedCustomer: Customer;
  Customers: Customer[];

  readonly URL_API = 'http://localhost:3000/api/customer';

  constructor(private http: HttpClient) {
    this.selectedCustomer = new Customer();
  }

  postCustomer(Customer: Customer) {
    return this.http.post(this.URL_API+'/add', {name : Customer.name ,phone : Customer.phone , message : Customer.message});
  }

  getCustomers() {
    return this.http.get(this.URL_API+'/list');
  }

  putCustomer(Customer: Customer) {
    return this.http.put(this.URL_API + `/${Customer._id}`, Customer);
  }

  deleteCustomer(_id: string) {
    return this.http.delete(this.URL_API + "/" + _id);
  }
}
