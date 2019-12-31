import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {EventsService} from './shared/events.service'
@Component({
    templateUrl:'./createevent.component.html',
    styles:[`
    em {float:right;color:#E05C65;padding-left:10px;}
  `]
})

export class CreateEventComponent{
    isDirty:boolean = true
    newEvent:any
    constructor(private router:Router,private eventsService:EventsService){

    }
    
    cancel(){
        this.router.navigate(['/events'])
    }
    saveEvent(formValue){
        console.log(formValue);
        this.eventsService.saveEvent(formValue)
        this.isDirty = false
        this.router.navigate(['events'])
    }
}