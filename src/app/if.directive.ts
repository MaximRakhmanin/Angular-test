import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private view = true;
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appIf(condition: Boolean) {
    if (!condition && !this.view) {
      this.viewContainer.clear();
      this.view = false;
    } else if (condition && this.view) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.view = true;
    }
  }
}
