import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
  standalone: true
})
export class StyleDirective {

  @Input('appStyle') color = ''

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) { }


  ngOnChanges(){
    this.cambiarColor(this.color);
  }

   cambiarColor(color: string | null) {
    this.renderer.setStyle(this._elementRef.nativeElement, 'background-color', color);
    this.renderer.setStyle(this._elementRef.nativeElement, 'transition', 'background-color 0.5s'); // Agregar una transición de 0.5 segundos

  }

}
