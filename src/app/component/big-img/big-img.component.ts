import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-img',
  templateUrl: './big-img.component.html',
  styleUrls: ['./big-img.component.css']
})
export class BigImgComponent implements OnInit {
  @Input()
  bigImg:string =''
  @Input()
  bigTitle:string =''
  @Input()
  bigDescription:string =''
  @Input()
  id:string="0"


  constructor() { }

  ngOnInit(): void {
  }

}
