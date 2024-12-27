import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../../directives/highlight.directive';

@Component({
  selector: 'app-template-stuff',
  imports: [
    CommonModule,
    CardComponent,
    CommonModule,
    FormsModule,
    HighlightDirective,
  ],
  templateUrl: './template-stuff.component.html',
  styleUrl: './template-stuff.component.scss',
})
export class TemplateStuffComponent {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';

  counter = 0;
  someName = 'muthu';

  incrementCounter() {
    this.counter++;
  }
  decrementCounter() {
    this.counter--;
  }
}
