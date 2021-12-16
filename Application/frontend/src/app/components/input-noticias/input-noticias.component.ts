import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-input-noticias',
  templateUrl: './input-noticias.component.html',
  styleUrls: ['./input-noticias.component.css']
})
export class InputNoticiasComponent implements OnInit {
   

  @Input() email: string;

  constructor(
    private usuariosService: UsuariosService
  ) { 

  }

  ngOnInit(): void {

  }

  addUser() {
    this.usuariosService.postUser(this.email).subscribe(res => {
      console.log(res)
    })
    alert('Suscrito correctamente')
  }

}
