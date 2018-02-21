import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingradient} from '../../shared/ingradient.model';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName') ingradientName: ElementRef;
  @ViewChild('ingAmount') ingradientAmount: ElementRef;

  // @Output() newIngradientItem = new EventEmitter<Ingradient>();

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  newIngradient() {
    const ingrName = this.ingradientName.nativeElement.value;
    const ingrAmt = this.ingradientAmount.nativeElement.value;

   // console.log(".....", ingrName, ingrAmt);

    this.shoppingService.addNewIngradient(new Ingradient(ingrName, ingrAmt));

    // this.newIngradientItem.emit(new Ingradient(this.ingradientName.nativeElement.value, this.ingradientAmount.nativeElement.value));
  }

}
