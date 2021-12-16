import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.css']
})
export class BotonMenuComponent implements OnInit {

  botones: any;

  constructor() {
    this.botones = [
      {nombre:"Números de emergencia", ruta:"/numeros_emergencia"},
      {nombre:"Recomendaciones", ruta:"/recomendaciones"},
      {nombre:"Noticias", ruta:"/noticias"},
      {nombre:"Test psicológico", ruta:"/test_psicologico"},
    ];
  }

  ngOnInit(): void {
  }

}
