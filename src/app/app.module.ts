import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import {EventsListComponent} from './events/events-list.component'
import {EventThumbNailComponent} from './events/event-thumbnail.component'
import {Nav} from './nav/navbar.component'
import {EventsService} from './events/shared/events.service'
import {EventsDetails} from './events/event-details/event-details.component'
import {appRoutes} from './routes'
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbNailComponent,
    Nav,
    EventsDetails
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
