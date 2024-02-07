import { Component } from '@angular/core';

import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  year: string = new Date().getFullYear().toString();

  dataFake: typeof dataFake = dataFake;

  skillsList: Array<{skill: string, years: string}> = [
    { skill: 'Mobile Developer', years: '3 Years'},
    { skill: 'Frontend Developer', years: '3 Years'},
    { skill: 'Backend Developer', years: '1.5 Years'},
  ]

  setItemStyle(index: number): string {
    return index % 2 === 0 ? 'pill-list' : ''
  }
}
