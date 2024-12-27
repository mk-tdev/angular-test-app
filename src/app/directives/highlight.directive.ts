import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.padding = '10px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red', 'white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('transparent', 'black');
  }

  private highlight(color: string, tColor: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = tColor;
  }
}
