import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
  ],
})
export class CustomersComponent {
  customerService = inject(CustomerService);

  list = this.customerService.getAll();

}
