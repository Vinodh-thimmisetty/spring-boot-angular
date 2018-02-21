import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements  OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  @HostBinding('style.width') width = '200px';

/*
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }


  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cyan');
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
*/

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
   }
  @HostListener('mouseenter') mouseOver(eventData: Event) {
        this.backgroundColor = this.highlightColor;
        this.width = '250px';
   }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
        this.width = '200px';
  }

}
