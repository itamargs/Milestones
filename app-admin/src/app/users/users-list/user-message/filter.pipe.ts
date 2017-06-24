import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: string): any {
    if(value.length===0 || !args)
      return value;
      const filterArray = [];
    for(const item of value) {
        var text = '';
        for(var i=0; i<item.firstName.length; i++){
          text+=item.firstName[i];
          if(text===args)
            filterArray.push(item);
        }
        text+= ' ';
        if(text===args)
            filterArray.push(item);
        for(var i=0; i<item.lastName.length; i++) {
          text+=item.lastName[i];
          if(text===args)
            filterArray.push(item);
        }
    } 
    return filterArray;

}
}
