import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './routing-servers.component.html',
  styleUrls: ['./routing-servers.component.css']
})
export class RoutingServersComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve Query Params
    console.log(this.activeRoute.snapshot.queryParams);
    console.log(this.activeRoute.snapshot.fragment);
    // If any Reloading happens
    this.activeRoute.queryParams.forEach(
      (queryParam: Params) => {
        console.log(queryParam);
      }
    );
    this.activeRoute.fragment.forEach(
      (fragmentVal: string) => {
        console.log(fragmentVal);
      }
    );
  }

  onPageReload() {
    // Any Server Calls before Reloading the Page
    this.router.navigate(['/routes/servers'], {relativeTo: this.activeRoute} );
  }



}
