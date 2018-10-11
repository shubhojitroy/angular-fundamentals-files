import { Component, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ngf-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;
  // @Output() eventClick = new EventEmitter();
  // someETProperty: any = 'some value'; // template property won't be required.

  constructor() { }

  ngOnInit() {
  }

  // handleClickMe() {
  //   this.eventClick.emit(this.event.nameAddress1);
  // }

  // logFoo() { // template method won't be required.
  //   console.log('foo');
  // }

}
