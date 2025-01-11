import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { MonthlyPurchasesComponent } from './components/monthly-purchases/monthly-purchases.component';

const routes: Routes = [
  { path: '', component: MonthlyPurchasesComponent },
  // Add other routes here
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
    // ... other providers
  ]
};
