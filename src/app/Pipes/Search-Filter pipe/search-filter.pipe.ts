import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any[], args: string) {
    if (!args) {
      return value;
    }
    const searchValue = args.toLowerCase();
    return value.filter((data: any) => {
      return (
        data.bookName.toLowerCase().includes(searchValue) ||
        data.author.toLowerCase().includes(searchValue)
      );
    });
  }
}
