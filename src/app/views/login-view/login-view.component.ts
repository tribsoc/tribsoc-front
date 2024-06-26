import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {

  email: string = '';
  password: string = '';
  remember: boolean = false;

  constructor() {

  }


  onSubmit() {
    // Lógica para lidar com o login
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember me:', this.remember);
  }

}
