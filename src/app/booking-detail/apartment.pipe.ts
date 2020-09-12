import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apartment'
})
export class ApartmentPipe implements PipeTransform {

  transform(value: any, args: string): string {
    
    switch (args) {
      case 'name':
        return value?.apartment?.name;    
      case 'street':
        return value?.apartment?.street;   
      case 'zipCode':
        return value?.apartment?.zipCode;   
      case 'city':
        return value?.apartment?.city;                           
    }

    return '';
  }

}
