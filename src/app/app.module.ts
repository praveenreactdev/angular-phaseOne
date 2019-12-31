import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import {EventsListComponent} from './events/events-list.component'
import {EventThumbNailComponent} from './events/event-thumbnail.component'
import {Nav} from './nav/navbar.component'
import {EventsService} from './events/shared/events.service'
import {EventsDetails} from './events/event-details/event-details.component'
import {CreateEventComponent} from './events/events-create.component'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component'
import {EventRouteActivator} from './events/event-details/event-route-activator.service'
import {EventListResolver} from './events/events-list-resolver.service'
import {AuthService} from './users/auth.service'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {CreateSessionComponent} from './events/event-details/create-session.component'
import { SessionList } from './events/event-details/session-list.component';
import { CollapsibleWell } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbNailComponent,
    Nav,
    EventsDetails,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionList,
    CollapsibleWell,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[EventsService,
    EventRouteActivator,
    EventListResolver,
    {
      provide:'canDeactivateCreateEvent',
      useValue:checkDirtyState
    },
    AuthService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('Are you sure, you haven\'t saved the event')
  }return true
}