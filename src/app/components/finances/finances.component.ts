import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyPurchasesComponent } from '../monthly-purchases/monthly-purchases.component';

@Component({
  selector: 'app-finances',
  standalone: true,
  imports: [CommonModule, MonthlyPurchasesComponent],
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.css'
})
export class FinancesComponent {
  isModalOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
