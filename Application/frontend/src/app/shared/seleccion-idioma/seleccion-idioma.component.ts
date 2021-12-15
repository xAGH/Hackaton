import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LangService} from '../lang.service'

@Component({
  selector: 'app-seleccion-idioma',
  templateUrl: './seleccion-idioma.component.html',
  styleUrls: ['./seleccion-idioma.component.css']
})
export class SeleccionIdiomaComponent implements OnInit {

  lenguajes: any;

  constructor(
    private translate: TranslateService,
    private langService: LangService,
  ) {
    this.translate.setDefaultLang(langService.getActiveLang());
    this.lenguajes = [
      {ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1ea-1f1f8.png", alt:"Español", code:"es"},
      {ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1ec-1f1e7.png", alt:"Inglés", code:"en"},
      {ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1e7-1f1f7.png", alt:"Portugues", code:"pt"},
      {ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1eb-1f1f7.png", alt:"Frances", code:"fr"},
    ];
  }

  active() {
    return this.langService.getActiveLang();
  }

  ngOnInit(): void {
  }

  public elegirIdioma(seleccionado: number) {
    for (let lenguaje of this.lenguajes){
      if (lenguaje.code == this.lenguajes[seleccionado].code){
        this.langService.setActiveLang(lenguaje.code)
      }
    }
    this.translate.use(this.langService.getActiveLang());
    console.log(this.langService.getActiveLang())
  }

}
