import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: '', component: AppComponent }, // Default route
    { path: 'event', component: EventComponent },
  ];