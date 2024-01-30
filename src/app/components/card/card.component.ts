import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input({ required: true }) title: string = ''
  @Input({ required: true }) subtitle: string = ''
  @Input({ required: true }) icon: string = ''
  @Input() link: string = ''
}
