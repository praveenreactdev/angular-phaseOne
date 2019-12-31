import {Routes} from '@angular/router'
import {EventsDetails} from './events/event-details/event-details.component'
import {EventsListComponent} from './events/events-list.component'
import {CreateEventComponent} from './events/events-create.component'
import {Error404Component} from './errors/404.component'
import {EventRouteActivator} from './events/event-details/event-route-activator.service'
import {EventListResolver} from './events/events-list-resolver.service'
import {CreateSessionComponent} from './events/event-details/create-session.component'
export const appRoutes:Routes = [
    {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events',component:EventsListComponent,resolve:{events:EventListResolver}},
    {path:'events/:id',component:EventsDetails,canActivate:[EventRouteActivator]},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'events/session/new',component:CreateSessionComponent},
    {path:'404',component:Error404Component},
    {path:'user',loadChildren:"./users/user.module#UserModule"}
]