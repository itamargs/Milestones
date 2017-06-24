import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  pageType: number;
  transform(value: any, args: any, filtered: string, users: any): any {
    if(value.length===0 || !filtered)
      return value;
    const filterArray = [];
    for(const item of value) {
        var text = '';
        for(var i=0; i<item.firstName.length; i++){
          text+=item.firstName[i];
          if(text===filtered)
            filterArray.push(item);
        }
        text+= ' ';
        if(text===filtered)
            filterArray.push(item);
        for(var i=0; i<item.lastName.length; i++) {
          text+=item.lastName[i];
          if(text===filtered)
            filterArray.push(item);
        }
    }
    return filterArray;
  }

}
