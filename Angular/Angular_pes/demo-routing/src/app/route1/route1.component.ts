import { DemoClass } from './../classes/demo-class';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component {
  constructor(private httpClient: HttpClient){}

  demoClass: DemoClass[] = [];


  onClick(){
    this.httpClient.get<wrapper>("http://localhost:3000")
      .pipe(
        catchError((error) => {
          console.error("HTTP Error:", error);
          return throwError(error);
        })
      )
      .subscribe((response: wrapper) => {
        this.demoClass = response.objects;
      });
  }

  push(){
    this.httpClient.post<DemoClass>("http://localhost:3000",
      new DemoClass("mama mia", 1, "miamor"));
  }

}




interface wrapper{
  objects: DemoClass[]
}
