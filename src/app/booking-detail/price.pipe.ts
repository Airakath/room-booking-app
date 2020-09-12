import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: number): unknown {

    if (price) {
      return price / 100;
    }

    return null;
  }

}
