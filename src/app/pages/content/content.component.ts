import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { dataFake } from "../../components/data/dataFake";
@Component({
  selector: 'app-content',
  imports: [MenuBarComponent, MenuTitleComponent, RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoConver:string =""
  contentTitle:string = ""
  contentDescription:string = ""
  private id: string | null = "0";
  constructor(private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(value => {
      this.id = (value.get("id"));
    });
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === Number(id))[0];
    this.contentTitle = result.title
    this. contentDescription = result.description
    this.photoConver = result.PhotoCover
  }
}
