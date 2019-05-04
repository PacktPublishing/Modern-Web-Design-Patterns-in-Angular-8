import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string;
  @Input() secondaryColor: string;

  constructor(private el: ElementRef) {
    console.log(this.el);
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.secondaryColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    const element = this.el.nativeElement as HTMLHeadingElement;
    element.style.color = color;
  }

}
