import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../services/backend-service.service';
import { Employee } from '../classes/employee';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit{
  constructor(private service: BackendServiceService,
    private service2: ProductService){}


  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(
      data => {
        this.employees = data;
      },
      error=>{
        console.log("eroor ho gaya praands", error);
      }
    );

    this.service2.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log("mama mia", error);
      }
    )
  }

  employees: Employee[] = [];

  products: Product[] = [];

}
