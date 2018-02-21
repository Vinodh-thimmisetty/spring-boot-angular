import {Component, OnChanges, OnInit} from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';
import {ShoppingListService} from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnChanges {


  possibleValue = 10;

  ingradients: Ingradient[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
   // console.log("Inside ShoppingListComponent ngOnInit >> ");
    this.ingradients = this.shoppingService.getIngradients();
    this.shoppingService.addNewIngradients.subscribe(
      (ingradients: Ingradient[]) => {
        this.ingradients = ingradients;
      }
    );
  }

  ngOnChanges() {
   // console.log("Inside ShoppingListComponent ngOnChanges >> ");
    this.ingradients = this.shoppingService.getIngradients();
  }

}
