import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    // Method which will will execute on any change of this property
    if (!condition) {
      //
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      //
      this.viewRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) {

      //

  }

}
