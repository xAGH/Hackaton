import { Component, OnInit } from '@angular/core';
import { RecomendacionesService } from 'src/app/services/recomendaciones.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  articulos: Article[] = [];

  constructor(
    private recomendacionesService: RecomendacionesService
  ) { }

  ngOnInit(): void {
    this.recomendacionesService.getArticles().subscribe((res:any) => {
      this.articulos = res;
    })
  }

}
