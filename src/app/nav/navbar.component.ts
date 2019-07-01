import {Component} from '@angular/core'
import {AuthService} from '../users/auth.service'
@Component({
    templateUrl:'./navbar.component.html',
    selector:'nav-bar',
    styles:[
        `.nav.navbar-nav {font-size:15px;}
        #searchForm {margin-right:100px;}
        @media (max-width:1200px) {#searchForm {display:none}}
        li > a.active {color:#F97924;}
        `
    ]
})

export class Nav {
    constructor(private authService:AuthService){
        
    }
}