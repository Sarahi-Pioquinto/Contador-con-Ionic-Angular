import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  counter :number=0;
//databinding

  constructor() {  }
  incrementar(){
    console.log("El boton ha sido presionado")
    this.counter++;

  }
  disminuir(){
    console.log("El boton ha sido presionado")
    this.counter--;

  }
  reset(){
    this.counter=0;
  }

}
