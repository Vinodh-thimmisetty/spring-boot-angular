import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers() {
    // Any Server Calls
    this.router
        .navigate(
          ['routes', 'servers'],
          {queryParams:
                    {
                     p1: 11,
                     p2: 'Vinodh'
                    },
                  fragment: 'yoyo'
                },
          );
  }

}
