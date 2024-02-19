import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:String = ""
  @Input()
  cardTitle:String = ""
  @Input()
  cardDecription:String = ""
  @Input()
  Id:String = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
