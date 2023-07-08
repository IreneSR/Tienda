import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva'
})
export class IvaPipe implements PipeTransform {

  transform(value: number): number {
    const iva = 0.16;
    const total = value + (value * iva);
    return parseFloat(total.toFixed(2));
  }
}
