import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FinancesComponent } from './components/finances/finances.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'finances', component: FinancesComponent },
];
