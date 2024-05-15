import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {
    
  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor() {
    this.userForm = new FormGroup({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    phone: new FormControl("",[Validators.required,Validators.minLength(11)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    city: new FormControl(""),
    state: new FormControl(""),
    isAggree: new FormControl(false)
    })
  }

  onSubmit() {
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted =  true;
  }

}
