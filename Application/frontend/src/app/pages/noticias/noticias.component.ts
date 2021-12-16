import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  articulos: Article[];

  constructor(
    private noticiasService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.noticiasService.getArticles().subscribe((res:any) => {
      this.articulos = res;
    })
  }

}
