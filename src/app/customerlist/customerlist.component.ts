import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customerList: any[];

  constructor(
    private customerService: CustomerService
  ) {
    this.getCustomerDetails();
  }

  
  getCustomerDetails() {
    this.customerService.getCustomers()
      .subscribe(customerList => this.customerList = customerList);
  }

  ngOnInit() {
    this.customerService.currentList.subscribe(m => this.customerList = m);
  }
}
