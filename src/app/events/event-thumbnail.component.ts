import {Component,Input,Output,EventEmitter} from '@angular/core'
import {IEvent} from './shared/event.model'
@Component({
    selector:'event-thumbnail',
    templateUrl : './event-thumbnail.component.html',
    styles:[
        `
        .green {color:#003300 !important;}
        .thumbnail {min-height:210px;}
        .pad-left {margin-left:10px;}
        .well div {color:#bbb;}
        `
    ]
    })

export class EventThumbNailComponent {
@Input() event:IEvent

}