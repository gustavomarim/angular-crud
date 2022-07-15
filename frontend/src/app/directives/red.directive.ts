import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // Injeção de dependência
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = '#e35e6b';
  }

}
