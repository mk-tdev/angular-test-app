import { Component } from '@angular/core';
import { ConditionalStuffComponent } from './conditional-stuff/conditional-stuff.component';
import { TemplateStuffComponent } from './template-stuff/template-stuff.component';

@Component({
  selector: 'app-practice',
  imports: [ConditionalStuffComponent, TemplateStuffComponent],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {

}
