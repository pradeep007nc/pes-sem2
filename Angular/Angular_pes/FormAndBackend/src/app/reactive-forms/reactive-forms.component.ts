import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  constructor(private fb: FormBuilder, private httpClient:HttpClient){
  }

  form_group: FormGroup = new FormGroup({
   name: new FormControl('', [Validators.required]),
   email: new FormControl('', [Validators.required]),
   phone: new FormControl('', Validators.required)
  });

  rett(){
    return this.httpClient.get<_embedded>("http://localhost:8080");
  }

  onSubmit(){
    console.log(this.form_group.value);
  }
}

interface _embedded{
  Object: Object[];
}
