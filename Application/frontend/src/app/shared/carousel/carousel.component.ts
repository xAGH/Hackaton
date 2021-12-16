import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() elementos: Article[] = [];
  index: number = 0;
  constructor() {}

  ngOnInit(): void {
  } 

  prev(){
    this.index = this.index - 1 == -1 ? this.elementos.length - 1 : this.index - 1
  }

  next(){
    this.index = this.index + 1 == this.elementos.length ? 0 : this.index + 1
  }
}