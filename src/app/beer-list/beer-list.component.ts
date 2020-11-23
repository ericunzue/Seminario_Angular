import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [{
    nombre: "Orange",
    tipo:"AAA",
    precio: 120,
    stock: 20,
    image:"assets/img/orange.png",    
    oferta: false,
  },
  {
    nombre: "Mandarin",
    tipo:"IPA",
    precio: 100,
    stock: 30,
    image:"assets/img/orange.png", 
    oferta: true,
  },
  {
    nombre: "Irish",
    tipo:"Red",
    precio: 110,
    stock:0,
    image:"assets/img/orange.png",
    oferta: false,
  },
];



  constructor() { }

  ngOnInit(): void {
  }

}
