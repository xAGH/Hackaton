import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() titulo: string;
  lenguajes: any;

  constructor() {
    this.lenguajes = [
      {link: "", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1e7-1f1f7.png", alt:"Portugues", selected:true},
      {link: "", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1e8-1f1f3.png", alt:"Chino", selected:false},
      {link: "", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1ea-1f1f8.png", alt:"Español", selected:false},
      {link: "", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1ec-1f1e7.png", alt:"Inglés", selected:false}
    ];
  }

  ngOnInit(): void {
  }

}
