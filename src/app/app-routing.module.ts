import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'events-list', component: EventsListComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', component: EventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
