import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-personal-ws';

  skillsList: Array<{skill: string, years: string}> = [
    { skill: 'Mobile Developer', years: '3 Years'},
    { skill: 'Frontend Developer', years: '3 Years'},
    { skill: 'Backend Developer', years: '1.5 Years'},
  ]

  setItemStyle(index: number): string {
    return index % 2 === 0 ? 'pill-list' : ''
  }
}
