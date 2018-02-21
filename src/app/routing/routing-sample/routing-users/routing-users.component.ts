import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-routing-users',
  templateUrl: './routing-users.component.html',
  styleUrls: ['./routing-users.component.css']
})
export class RoutingUsersComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    }

}
