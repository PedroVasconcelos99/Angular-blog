import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  photoCover:String = ""
  contentTitle:String = ""
  contentDescription:String = ""
  isImportant:boolean = false
  private id:string|null = "0"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null) {
    const result = dataFake.filter(article => article.id==id)[0]
    console.log(result)
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.isImportant = result.isImportant
  }

}
