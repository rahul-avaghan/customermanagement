import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customerdetailsview',
  templateUrl: './customerdetailsview.component.html',
  styleUrls: ['./customerdetailsview.component.css']
})
export class CustomerdetailsviewComponent implements OnInit {
  id: string;
  showDetails: boolean = false;
  routeObserver;
  customer: Customer;
  oldCustomerDetails: Customer;
  
  


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {
      this.routeObserver = this.route.params.subscribe(params => {
        this.id = params['id'];

          this.customerService.getCustomerById(this.id).subscribe(item => {
            if (item) {
              this.oldCustomerDetails = JSON.parse(JSON.stringify(item));
              this.customer = item;
              this.showDetails = true;
            }
            else {
              this.router.navigate(['']);
            }
          }
        );
      }
    );
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.routeObserver.unsubscribe();
  }

  /**
   * canecl current operation
   */
  onCancel() {
    this.customer = JSON.parse(JSON.stringify(this.oldCustomerDetails));
    this.onUpdateDetails(this.oldCustomerDetails);
    this.showDetails = false;
  }
  /**
   *  update information on edit or cancel
   * @param customerInfo customer infor to be updated on edit/cancel
   */
  onUpdateDetails(customerInfo) {
    this.customerService.updateCustomerInfo(customerInfo);
    this.showDetails = false;
  }

}
