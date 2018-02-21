import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Ingradient} from '../shared/ingradient.model';

export class ShoppingListService implements OnInit {

    ingradients: Ingradient[] = [

    new Ingradient('Apples', 10),
    new Ingradient('Tomatoes', 20)

  ];

  addNewIngradients = new EventEmitter<Ingradient[]>();

  constructor() { }

  ngOnInit() {
   // console.log("Inside ShoppingListService ngOnInit >> ");
  }

  public getIngradients(): Ingradient[] {
   // console.log(" Ingradients Length ::", this.ingradients.length);
    return this.ingradients.slice();
  }

  public addNewIngradient(newIngradient: Ingradient) {
    this.ingradients.push(newIngradient);
    this.addNewIngradients.emit(this.ingradients);
   // console.log(" Ingradients Length After Adding New Items ::", this.ingradients.length);
  }

  public addMultipleIngradients(newIngradients: Ingradient[]) {
    // Functional Programming
    this.ingradients.push(...newIngradients);
    this.addNewIngradients.emit(this.ingradients);
    }

}
