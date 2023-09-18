import { TodoItem } from './../classes/todo-item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<getProductsApi>("http://localhost:8080/api/products")
    .pipe(map(response => response._embedded.products));
  }


  getAllTodoItems(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map((response) =>
        response.map(
          (item) =>
            new TodoItem(
              item.userId,
              item.id,
              item.title,
              item.completed
            )
        )
      )
    );
  }
}


interface getProductsApi{
  _embedded:{
    products: Product[];
  }
}

interface getTodoUsers{
  data: TodoItem[];
}

interface response{
  data : TodoItem[];
}
