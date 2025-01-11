import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  events: Event[] = []; 

  ngOnInit() {
     
    // Log the count of events when the component is initialized
    console.log('Event count:', this.events.length);
  }
}

