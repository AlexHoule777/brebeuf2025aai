import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import Chart from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-monthly-purchases',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './monthly-purchases.component.html',
  styleUrl: './monthly-purchases.component.css'
})
export class MonthlyPurchasesComponent {
  constructor() {
    Chart.register();
  }

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: 'Monthly Expenses',
        backgroundColor: '#FFCD00',
        borderColor: '#E6B800',
        borderWidth: 1
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      y: {
        grid: {
          color: '#FFFFFF50'
        },
        beginAtZero: true,
        ticks: {
          color: '#FFFFFF'
        }
      },
      x: {
        ticks: {
          color: '#FFFFFF'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#FFFFFF'
        }
      }
    }
  };
}
