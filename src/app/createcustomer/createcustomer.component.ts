import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Name } from './../name';
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {
  customer: Customer;
  showDetails:boolean = true;
  constructor(private customerService: CustomerService) {
debugger;
    this.customer = new Customer(new Name());
    this.showDetails = true;
   }

  ngOnInit() {
  }
  onCancel() {
    this.customer = new Customer(new Name());
    this.showDetails = false;
  }
  /**
   * 
   * @param customerInfo 
   */
  onSaveCustomerDetails(customerInfo) {
  this.customerService.createCustomerInfo(customerInfo);
    this.showDetails = false;
  }
}
