import { Component } from '@angular/core';
import { ConditionalStuffComponent } from './conditional-stuff/conditional-stuff.component';
import { TemplateStuffComponent } from './template-stuff/template-stuff.component';
import { CommonModule } from '@angular/common';
import { TestLCComponent } from '../../components/test-lc/test-lc.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice',
  imports: [
    ConditionalStuffComponent,
    TemplateStuffComponent,
    CommonModule,
    TestLCComponent,
    FormsModule,
  ],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss',
})
export class PracticeComponent {
  showTestChild = true;
  someTestName = '';

  toggleTestChild() {
    this.showTestChild = !this.showTestChild;
  }
}
