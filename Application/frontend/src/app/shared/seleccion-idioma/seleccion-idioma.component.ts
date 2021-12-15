import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-idioma',
  templateUrl: './seleccion-idioma.component.html',
  styleUrls: ['./seleccion-idioma.component.css']
})
export class SeleccionIdiomaComponent implements OnInit {

  lenguajes: any;

  constructor() {
    this.lenguajes = [
      {link: "#", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1ea-1f1f8.png", alt:"Español", selected:true},
      {link: "#", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1ec-1f1e7.png", alt:"Inglés", selected:false},
      {link: "#", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1e7-1f1f7.png", alt:"Portugues", selected:false},
      {link: "#", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1e8-1f1f3.png", alt:"Chino", selected:false},
    ];
  }

  ngOnInit(): void {
  }

  elegirIdioma(seleccionado: number) {
    for (let lenguaje of this.lenguajes){
      lenguaje.selected = false;
    }
    this.lenguajes[seleccionado].selected = true;
  }

}
