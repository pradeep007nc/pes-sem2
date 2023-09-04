import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(fb: FormBuilder){}

  route: string = "route";

  form_group = new FormGroup(
    {
      first_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      last_name : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      prn: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{3}\\d{1}(pg|ug)\\d{2}[a-zA-Z]{2}\\d{3}$'),
                                Validators.maxLength(13)])
    }
  );

  onSubmit(){
    this.route = "form";
  }

  F(){
    return this.form_group.controls;
  }
}
