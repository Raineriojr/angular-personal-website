import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) subtitle: string = '';
}
