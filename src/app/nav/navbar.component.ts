import { Component } from "@angular/core";
import { AuthService } from "../users/auth.service";
import { ISession } from "../events/shared/event.model";
import { EventsService } from "../events/shared/events.service";
@Component({
  templateUrl: "./navbar.component.html",
  selector: "nav-bar",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active {
        color: #f97924;
      }
    `
  ]
})
export class Nav {
  searchTerm: string = "";
  foundSession: ISession[] = [];
  constructor(
    private authService: AuthService,
    private eventService: EventsService
  ) {}
  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(session => {
      this.foundSession = session;
    });
  }
}
