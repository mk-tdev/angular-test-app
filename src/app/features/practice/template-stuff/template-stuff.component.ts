import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-template-stuff',
  imports: [CommonModule, CardComponent],
  templateUrl: './template-stuff.component.html',
  styleUrl: './template-stuff.component.scss',
})
export class TemplateStuffComponent {}
