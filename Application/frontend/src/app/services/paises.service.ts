import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../interfaces/paises';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url_base: string = "https://info-help.herokuapp.com/api"

  constructor(
    private http: HttpClient
  ) {}

  getPaises() {
    const path = `${this.url_base}/lista_paises`
    return this.http.get<Pais[]>(path).pipe(map((res:any) => {
      return res.response
    }))
  }
}
