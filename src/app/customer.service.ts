import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable, of, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  lastIndex = 5;
  customerList = [
    {
      "customerID": 1,
      "name": {
        "first": "Peter",
        "last": "Smith"
      },
      "photo": "male/m (1).png",
      "birthday": "1996-10-12",
      "gender": "m",
      "lastContact": "2017-06-01T23:28:56.782Z",
      "customerLifetimeValue": 191.12
    },
    {
      "customerID": 2,
      "name": {
        "first": "Anna",
        "last": "Hopp"
      },
      "photo": "female/f (2).png",
      "birthday": "1987-05-03",
      "gender": "w",
      "lastContact": "2017-07-08T13:18:56.888Z",
      "customerLifetimeValue": 50.99
    },
    {
      "customerID": 3,
      "name": {
        "first": "Christian",
        "last": "Cox"
      },
      "birthday": "1991-02-21",
      "gender": "m",
      "photo": "male/m (3).png",
      "lastContact": "2017-08-01T11:57:47.142Z",
      "customerLifetimeValue": 0
    },
    {
      "customerID": 4,
      "name": {
        "first": "Roxy",
        "last": "Fox"
      },
      "birthday": "1979-06-30",
      "gender": "w",
      "photo": "female/f (3).png",
      "lastContact": "2017-01-29T21:08:50.700Z",
      "customerLifetimeValue": 213.12
    },
    {
      "customerID": 5,
      "name": {
        "first": "Eric",
        "last": "Adam"
      },
      "birthday": "1969-11-21",
      "gender": "m",
      "photo": "male/m (4).png",
      "lastContact": "2017-03-18T12:20:06.702Z",
      "customerLifetimeValue": 1019.91
    }];

  private customerSource = new BehaviorSubject<any>(this.customerList);
  currentList = this.customerSource.asObservable();

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(this.customerList);
  }
  getCustomerById(id): Observable<Customer> {
    return of(this.customerList.find(t => t.customerID == id));//== beacauase customerID is in string

  }
  updateCustomerInfo(customer): void {
    let index: number;
    if (customer && customer.customerID > 0) {
      index = this.customerList.findIndex(t => t.customerID == customer.customerID);
      if (index >= 0) {
        this.customerList[index] = customer;
        this.customerSource.next(this.customerList);
      }
    }

  }
  createCustomerInfo(customer): void {
    if (customer) {
      customer.customerID = this.lastIndex + 1;
      
      customer.photo =(<string>customer.gender).toLowerCase() == 'm'  ? 'male/m ('+customer.customerID+').png' : 'female/f ('+customer.customerID+').png';
      this.customerList.push(customer);
      this.customerSource.next(this.customerList);
      this.lastIndex ++;
    }
 
  }
  deleteCustomer(customerID:number):void{
    let index = this.customerList.findIndex(t => t.customerID == customerID);
    if(index >= 0){
    this.customerList.splice(index,1);
    }
  }
}
