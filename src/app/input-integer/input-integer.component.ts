import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  cantidadMaxima: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {
  }

  upCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else
      this.cantidadMaxima.emit("No hay más");
  }

  

  downCantidad(): void {
    if (this.cantidad > 0)
      this.cantidad--;
    this.cantidadChange.emit(this.cantidad);


  }

  cambiarCantidad(event): void {
    console.log(event.key)
    this.cantidadChange.emit(this.cantidad);

  }

}
