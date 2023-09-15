import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../services/backend-service.service';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit{
  constructor(private service: BackendServiceService){}
  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(
      data => {
        this.employees = data;
      },
      error=>{
        console.log("eroor ho gaya praands", error);
      }
    );
  }

  employees: Employee[] = [];


}
