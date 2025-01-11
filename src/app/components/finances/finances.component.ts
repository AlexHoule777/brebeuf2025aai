import { Component } from '@angular/core';
import { MonthlyPurchasesComponent } from '../monthly-purchases/monthly-purchases.component';

@Component({
  selector: 'app-finances',
  imports: [MonthlyPurchasesComponent],
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.css'
})
export class FinancesComponent {

}
