import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective {

  constructor(private tamplateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  @Input() set appForOf ({...name}) {
    if (name) {
        this.viewContainer.clear();
      for (const i in name ) {
        this.viewContainer.createEmbeddedView(this.tamplateRef, {
          $implicit: name[i]
        });
      }
    }
  }
}
