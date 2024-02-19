import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:String = ""
  @Input()
  cardTitle:String = ""
  @Input()
  Id:String = "0"
  constructor() { }

  ngOnInit(): void {
  }

}
