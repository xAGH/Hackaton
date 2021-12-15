import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  elementos: any;
  largor_lista: number;
  index: number = 0;

  constructor() {
    this.elementos = [
        {"texto":"Las contraventanas permanentes son la mejor protección. Un método más barato consiste en colocar paneles de madera contrachapada. Use tablones de madera de 1/2 pulgada - la madera contrachapada marina es la mejor - corte a la medida de cada ventana. No olvide marcar qué tablón es para qué ventana. Perfore agujeros cada 18 pulgadas para los tornillos. Haga esto mucho antes de que llegue la tormenta.", "img":"https://huracanes.fiu.edu/_assets/hurricane-images/shutters-7.png"},
        {"texto":"2", "img":"https://images.emojiterra.com/twitter/v13.1/128px/1f44f.png"},
        {"texto":"3", "img":"https://images.emojiterra.com/twitter/v13.1/128px/262e.png"},
        {"texto":"3", "img":"https://images.emojiterra.com/twitter/v13.1/128px/1f44f.png"},
      ];
    this.largor_lista = this.elementos.length
  }

  ngOnInit(): void {
  } 

  prev(){
    this.index = this.index - 1 == -1 ? this.largor_lista - 1 : this.index - 1
  }

  next(){
    this.index = this.index + 1 == this.largor_lista ? 0 : this.index + 1
  }

  elemento(){
    return this.elementos[this.index]
  }
}