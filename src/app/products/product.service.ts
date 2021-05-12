import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string = ' https://obscure-lowlands-73032.herokuapp.com/api/products';
  constructor(private http: HttpClient) { }

  getProducts(categoryId: string): Observable<{products: Product[], maxProducts: number}> {
    return this.http.get<{products: Product[], maxProducts: number}>(this.productUrl + '/' + categoryId);
  }
}
