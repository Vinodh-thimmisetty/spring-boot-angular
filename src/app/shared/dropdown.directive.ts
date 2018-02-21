import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  // On click of any Dropdown selection, Open the List under Dropdown

  constructor() { }

  @HostListener('click') toggleOpen(event: Event) {
    this.isOpen = !this.isOpen;
  }

}
