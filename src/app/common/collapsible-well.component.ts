import {Component, Input} from '@angular/core'

@Component({
    selector:'collapsible-well',
    template:` <div class="well pointable" (click)="toggleContent()">
    <h4 ><ng-content  select="[well-title]"></ng-content></h4>
    <ng-content select="[well-body]"></ng-content>
    
    </div>`
})

export class CollapsibleWell{
visible:boolean = true
    toggleContent(){
        this.visible = !this.visible
    }
}