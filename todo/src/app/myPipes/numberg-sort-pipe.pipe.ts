import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbergSortPipe'
})
export class NumbergSortPipePipe implements PipeTransform {

sortNumbers=function(first,second){
  console.log("Rcvd:" + first +"and"+second)
console.log(first-second)
return first-second;
}
  transform(value: any, args?: any): any {
    console.log(value.sort(this.sortNumbers));
    return value.sort(this.sortNumbers).reverse();
  }

}

