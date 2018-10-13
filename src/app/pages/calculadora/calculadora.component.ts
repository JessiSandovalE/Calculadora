import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  title: string;
  subtitle: string;
  description: string;
  operation: any[];
  num: number[];
  show: boolean = true;


  constructor() { }

  ngOnInit() {
    this.title = 'App Calculadora';
    this.subtitle = ' Clase Angular ';
    this.operation = ['+', '-', '*', '/'];
    this.num = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  }

}
