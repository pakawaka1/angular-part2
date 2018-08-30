import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private api: ApiService) { }



getProducts(): any {
  return this.api.get('/products');
}

// calculateProducts(product => {
//   this.
// })


}
