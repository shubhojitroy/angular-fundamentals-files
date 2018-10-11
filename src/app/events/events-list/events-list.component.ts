import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngf-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  event1 = {
    id: 1237,
    nameAddress1: 'Angular Connect',
    nameAddress2: '9/26/2036',
    nameAddress3: '10:00am',
    nameAddress4: 599.99,
    imageUrl: '/src/assets/images/angularconnect-shield.png',
    nameAddress6: {
      address: '1057 DT',
      city: 'Sydney',
    }
  };

  constructor() { }

  ngOnInit() {
  }

  handleEventClicked(data) {
    console.log('received:', data);
  }

}
