import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailsviewComponent } from './customerdetailsview/customerdetailsview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { CustomerComponent } from './customer/customer.component';
import { 
  RouterModule,
   Routes 
  } from '@angular/router';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MAT_DIALOG_DEFAULT_OPTIONS
}  from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DeleteconfirmationComponent } from './deleteconfirmation/deleteconfirmation.component';
import {
   FormsModule,
   ReactiveFormsModule
   } from '@angular/forms';
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  declarations: []
})
export class MaterialModule {}
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', //default
    redirectTo: 'customerlist'
  },
  {
    path: 'customerlist', component: MainviewComponent,
    children: [
      { path: 'customer/:id', component: CustomerdetailsviewComponent },
      { path: 'createcustomer', component: CreatecustomerComponent }
    ]
  }

]
@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    CustomerlistComponent,
    CustomerdetailsviewComponent,
    NavigationComponent,
    CreatecustomerComponent,
    CustomerComponent,DeleteconfirmationComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,  BrowserAnimationsModule,MaterialModule, RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
 entryComponents: [DeleteconfirmationComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
