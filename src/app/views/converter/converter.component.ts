import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
    value: number = 0;
    dolar: number = Math.random() * (5.4 - 5) + 5;
    euro: number = 6.10;
    real: number = 0;
    realAfterTax: number = 0;
    taxes: number = 0;
    selectedCurrency: string = 'dolar';
    taxRates = {
        dolar: 0.10,
        euro: 0.15
    };
    historico: any[] = [];

    setCurrency(currency: string) {
      this.selectedCurrency = currency;
      this.updateValue(this.value);
    }

    updateValue(newValue: any) {
      this.value = newValue;
    }

    calculate() {
      let item = {
        valor: this.value,
        valorConvertido: this.realAfterTax
      };

      if (this.selectedCurrency === 'dolar') {
        this.real = this.value * this.dolar;
        this.taxes = this.real * this.taxRates.dolar;
        this.realAfterTax = this.real - this.taxes;
      } else if (this.selectedCurrency === 'euro') {
        this.real = this.value * this.euro;
        this.taxes = this.real * this.taxRates.euro;
        this.realAfterTax = this.real - this.taxes;
      }

      if (this.historico.length >= 2) {
        this.historico.shift();
      }
      this.historico.push(item);
      console.log(this.dolar)
    }
  }
