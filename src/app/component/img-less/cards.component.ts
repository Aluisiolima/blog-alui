import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input()
  cardTitle:string = ''
  @Input()
  cardImg:string = ''
  @Input()
  id:string="0"


  constructor() { }

  ngOnInit(): void {
  }

}
