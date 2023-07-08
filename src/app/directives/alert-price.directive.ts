import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlertPrice]'
})
export class AlertPriceDirective {

  @HostListener('mouseenter') onMouseEnter() {
    alert('¡Compra, compra, compraaaaaa no seas codo!')
  }

}