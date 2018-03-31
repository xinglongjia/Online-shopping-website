import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(products: any, search: any): any {
    if (search === undefined) {
      return products;          //当搜索为空时，返回所有产品
    }else{
      return products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }

}
