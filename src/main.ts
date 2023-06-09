import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
})
export class App {
  name = 'Danny';
  cargo = 'Estudiante';
  a = 100;
  b = 0;
  c = 0;
  contador = 0;

  calcular() {
    console.log('Hola UPS', this.a);
    this.contador = this.contador + 1;
    this.c = 0 + this.a + eval('' + this.b);
  }
  calcularSuma(){
    console.log("Hola UPS")
    this.contador=this.contador+1;
  
    this.c= +this.a + eval(""+this.b)
  }
  calcularResta(){
    console.log("Hola UPS")
    this.contador=this.contador+1;
  
    this.c=  - this.b + eval(""+this.a)
  }
  
  calcularMultiplicacion(){
    console.log("Hola UPS")
    this.contador=this.contador+1;
  
    this.c= this.a*this.b;
  }
  calcularDiv(){
    this.c= this.a/this.b;
  }
}

bootstrapApplication(App);
