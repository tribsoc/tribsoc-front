import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  nome: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Nome:', this.nome);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
