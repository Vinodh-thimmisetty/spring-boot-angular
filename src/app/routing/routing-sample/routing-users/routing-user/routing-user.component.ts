import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-routing-user',
  templateUrl: './routing-user.component.html',
  styleUrls: ['./routing-user.component.css']
})
export class RoutingUserComponent implements OnInit, OnDestroy {

  user: {id: number, name: string};
  parentsSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    };
   this.parentsSubscription = this.activeRoute
        .params
        .subscribe( // Lives only in Memory
          (updatedParams: Params) => {
            this.user.id = updatedParams['id'];
            this.user.name = updatedParams['name'];
          }
        );
  }

  ngOnDestroy() {
    this.parentsSubscription.unsubscribe();
  }
}
