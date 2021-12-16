import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  url_base: string = "https://info-help.herokuapp.com/api"

  constructor(
    private http: HttpClient
  ) {}

  getArticles(){
    return this.http.get<Article[]>(`${this.url_base}/articulos/recomendaciones`)
    .pipe(map((res:any) => {
      return res.response
    }))
  }

}
