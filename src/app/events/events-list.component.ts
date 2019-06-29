import {Component, OnInit} from '@angular/core'
import { EventsService } from './shared/events.service';
import {ActivatedRoute} from '@angular/router'
@Component({
    selector:'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit{
    events:any
   constructor(private eventsService:EventsService,private route:ActivatedRoute){
    
   }
   ngOnInit(){
    this.events =  this.route.snapshot.data['events']
   }
   handleThumbnailClick(eventName){
    
   }
    handleEventClicked(data){
        
    }
}