import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Food } from '../data-type';
import { foodData } from '../data'; 

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // addProduct(data: Food) {
  //   return this.http.post('http://localhost:3000/products', data);
  // }

  // productList() {
  //   return this.http.get<Food[]>('http://localhost:3000/products');
  // }

  // getProduct(id: string) {
  //   return this.http.get<Food>(`http://localhost:3000/products/${id}`);
  // }

  searchProduct(query: string) {
    console.log(query)
    return this.http.get<Food[]>(
        // `https://searchv7.expertrec.com/v6/search/430ccc48-e8aa-11ed-b402-0242ac130002/?q=${query}`
      `http://localhost:3000/search?q=${query}`
    );
  }

}