import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css']
})
export class BootstrapFormComponent {

  user = {
    name : "",
    email: "",
    address: ""
  }

  constructor(){}

  logg(){
    console.log(this.isValid+""+ this.user.name);
  }
  isValid: boolean = false;
}
