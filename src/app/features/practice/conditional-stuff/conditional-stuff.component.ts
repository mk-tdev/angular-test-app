import {
  CommonModule,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-stuff',
  imports: [CommonModule],
  templateUrl: './conditional-stuff.component.html',
  styleUrl: './conditional-stuff.component.scss',
})
export class ConditionalStuffComponent {
  showFirstSection = true;
  showSecondSection = false;

  favColor = 'blue';
  favFruits = ['apple', 'banana', 'cherry', 'date'];
}
