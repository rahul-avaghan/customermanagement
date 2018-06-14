import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteconfirmationComponent } from '../deleteconfirmation/deleteconfirmation.component';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input()
  customer: Customer;

  DIALOG_WIDTH: number;
  DIALOG_CONFIMATION_SUCCESS: string = 'Yes';
  selectedCustomerID: number;
  isDeleted: boolean = false;


  constructor(
    public dialog: MatDialog,
    private customerSerivce: CustomerService
  ) { }

  ngOnInit() { }

  /**
   * to select a customer
   */
  selectCustomer() {
    this.selectedCustomerID = this.customer.customerID;
  }

  /**
   * To delete card from the UI
   * @param event click event from delete button
   */
  onDelete(event) {
    event.stopPropagation();
    //ask for confirmation before deletion
    let dialogRef = this.dialog.open(
      DeleteconfirmationComponent, {
        width: this.DIALOG_WIDTH + 'px'
      }
    );

    dialogRef.afterClosed().subscribe((feedback) => {
      if (feedback === this.DIALOG_CONFIMATION_SUCCESS) {
        this.isDeleted = true;
        setTimeout(
          () => {
            this.customerSerivce.deleteCustomer(this.customer.customerID)
          }
          , 300);
      }
    }
    );
  }

}


