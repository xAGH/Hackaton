import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seleccion-pais',
  templateUrl: './seleccion-pais.component.html',
  styleUrls: ['./seleccion-pais.component.css']
})
export class SeleccionPaisComponent implements OnInit {

  @Input() paises: any;
  bandera_pais_actual: string;
  alt_bandera: string;
  numeros: any;
  
  constructor() {
    this.paises = [
      {nombre:"Colombia", codigo:"CO", bandera:"https://images.emojiterra.com/twitter/v13.1/128px/1f1e8-1f1f4.png", numeros:
        [
          {especialidad: "policia", numero:123}, {especialidad:"bomberos", numero:"234"}
        ]
      },
      {nombre:"Venezuela", codigo:"VE", bandera:"https://images.emojiterra.com/twitter/v13.1/128px/1f1fb-1f1ea.png",numeros:
        [
          {especialidad: "policia", numero:456}, {especialidad:"bomberos", numero:789},{especialidad:"bomberos", numero:789} ,{especialidad:"bomberos", numero:789}, {especialidad: "policia", numero:456}, {especialidad:"bomberos", numero:789},{especialidad:"bomberos", numero:789} ,{especialidad:"bomberos", numero:789}, {especialidad: "policia", numero:456}, {especialidad:"bomberos", numero:789},{especialidad:"bomberos", numero:789} ,{especialidad:"bomberos", numero:789}
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

  seleccionPais(codigoPais:any) {
    this.bandera_pais_actual = "";
    this.alt_bandera = "";
    this.numeros = [];
    for (let pais of this.paises) {

      if (pais.codigo === codigoPais.value) {
        this.bandera_pais_actual = pais.bandera;
        this.alt_bandera = pais.codigo;
        this.numeros = pais.numeros;
      }

    }
  }

}
