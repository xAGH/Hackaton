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
      {link: "", ruta:"https://imgur.com/dbqQAW8", alt:"Portugues"},
      {link: "", ruta:"https://imgur.com/Q1KeHQZ", alt:"Chino"},
      {link: "", ruta:"https://images.emojiterra.com/twitter/v13.1/128px/1f1ea-1f1f8.png", alt:"Español"},
      {link: "", ruta:"https://images.emojiterra.com/twitter/v13.1/512px/1f1ec-1f1e7.png", alt:"Inglés"}
    ];
  }

  ngOnInit(): void {
  }

}
