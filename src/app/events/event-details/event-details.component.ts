import {Component, OnInit} from '@angular/core'
import {EventsService} from '../shared/events.service'
import {ActivatedRoute,Params} from '@angular/router'
import {IEvent} from '../shared/event.model'
@Component({
    templateUrl:'./events-details.component.html',
    styles:[
        `.container {padding-left:20px;padding-right:20px;}
        .event-image {height:100px;}
        `
    ]
})

export class EventsDetails implements OnInit{
    event:IEvent
    filterBy:string = 'all'
    sortBy:string = 'name'
    constructor(private eventsService:EventsService,
        private route:ActivatedRoute
        ){}
    ngOnInit(){

        this.route.params.forEach((params:Params)=>{
             this.eventsService.getEvent(+params['id']).subscribe((event:IEvent)=>{
                this.event = event
            })
        })
    }
}