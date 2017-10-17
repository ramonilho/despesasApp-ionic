import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DecimalBrPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'decimalBr',
})
export class DecimalBrPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number): string {
    return value.toString().replace(",","&").
    replace(".", ",").replace("&",".");
  }
}