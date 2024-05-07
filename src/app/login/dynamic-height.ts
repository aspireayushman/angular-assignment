import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicHeight]'
})
export class DynamicHeightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setDynamicHeight();
  }

  private setDynamicHeight() {
    const windowHeight = window.innerHeight;
    this.el.nativeElement.style.height = windowHeight + 'px';
  }

}
