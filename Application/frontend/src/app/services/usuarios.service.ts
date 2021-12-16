import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  url_base: string = "https://info-help.herokuapp.com/api"

  constructor(
    private http: HttpClient
  ) {}

  postUser(email:string) {
    const path = `${this.url_base}/usuarios`
    return this.http.post(path, {"email": email})
  }
}
