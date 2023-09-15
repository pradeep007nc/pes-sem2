import { Employee } from './../classes/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private httpClient: HttpClient) { }

getAllCustomers(): Observable<Employee[]>{
    return this.httpClient.get<ApiResponse>("https://dummy.restapiexample.com/api/v1/employees")
            .pipe(map(response => response.data));
  }
}

interface ApiResponse{
  status: string;
  data: Employee[];
  message: string;
}



