import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url_base: string = "https://info-help.herokuapp.com/api"

  constructor(
    private http: HttpClient
  ) {}

  getArticles(){
    return this.http.get<Article[]>(`${this.url_base}/articulos/noticias`)
    .pipe(map((res:any) => {
      return res.response
    }))
  }

}
