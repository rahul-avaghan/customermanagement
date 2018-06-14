import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetailsviewComponent } from './customerdetailsview.component';

describe('CustomerdetailsviewComponent', () => {
  let component: CustomerdetailsviewComponent;
  let fixture: ComponentFixture<CustomerdetailsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdetailsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerdetailsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
