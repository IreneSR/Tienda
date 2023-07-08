import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowels'
})
export class VowelsPipe implements PipeTransform {

  transform(value: string): string {
    const replacements: { [key: string]: string } = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0',
      'u': '9'
    };

    let result = '';

    for (let i = 0; i < value.length; i++) {
      const char = value[i].toLowerCase();
      result += replacements[char] || char;
    }
    return result;
  }
}