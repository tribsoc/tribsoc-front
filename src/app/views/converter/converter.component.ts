import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
    value = ''
    dolar:number = 5.16;
    real:number = 0

    calculateDolar(){
      this.real = 0;
      this.real = +this.value * this.dolar
    }

}
