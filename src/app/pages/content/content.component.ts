import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() content_title: string = '';
  @Input() content_description: string = '';
  @Input() private id: string | null = "0";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(values => {
      this.id = values.get('id');

      this.setValuesInComponent(this.id)
    })
  }

  setValuesInComponent(id: string | null): void {
    const [item] = dataFake.filter((item, index) => { return item.id === this.id })

    this.content_title = item.title;
    this.content_description = item.description
    this.photoCover = item.photo
  }

}
