import { Component, OnInit, Input } from '@angular/core';
import { Pais } from 'src/app/interfaces/paises';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-seleccion-pais',
  templateUrl: './seleccion-pais.component.html',
  styleUrls: ['./seleccion-pais.component.css']
})
export class SeleccionPaisComponent implements OnInit {

  paises: Pais[];
  bandera_pais_actual: string;
  alt_bandera: string;
  numeros: any;
  
  constructor(
    private paisesService: PaisesService 
  ) {}

  ngOnInit(): void {
    this.paisesService.getPaises().
    subscribe((res:any) => {
      this.paises = res;
    })
  }

  seleccionPais(codigoPais:any) {
    this.bandera_pais_actual = "";
    this.alt_bandera = "";
    this.numeros = [];
    for (let pais of this.paises) {

      if (pais.pais === codigoPais.value) {
        this.bandera_pais_actual = pais.bandera;
        this.alt_bandera = pais.codigo;
        this.numeros = pais.numeros;
      }

    }
  }

}
