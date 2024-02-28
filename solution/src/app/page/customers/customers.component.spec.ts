import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomerService } from '../../service/customer.service';

import { customers } from '../../../test/customers';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomersComponent,
        CommonModule,
      ],
      providers: [{ provide: CustomerService, useValue: {
        list: customers,
        getAll: () => of(customers)
      } }],
    });
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('list should be an Observable of customers', () => {
    expect( component.list instanceof Observable ).toBeTruthy();
  });

  it('name shuld be uppercase, address should be lowercase', () => {
    fixture.whenStable().then(() => {
      const row = fixture.debugElement.nativeElement.querySelectorAll(
        'tbody tr:first-child td'
      );

      expect(row[1]).toMatch(/COLLIE BATTSON/);
      expect(row[3]).toMatch(/48223 sommers hill/);
    });
  });

});
