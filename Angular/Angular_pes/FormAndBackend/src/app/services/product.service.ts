import { Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { HtmlParser } from '@angular/compiler';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }


  getAllProducts(){
    return this.httpClient.get<getProductsApi>("http://localhost:8080/api/products")
    .pipe(map(response => response._embedded.products));
  }
}

interface getProductsApi{
  _embedded:{
    products: Product[];
  }
}
