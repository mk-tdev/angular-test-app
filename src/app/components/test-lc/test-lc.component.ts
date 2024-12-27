import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-lc',
  imports: [],
  templateUrl: './test-lc.component.html',
  styleUrl: './test-lc.component.scss',
})
export class TestLCComponent {
  @Input() inputData = '';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log('ngoninit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    for (const inputName in changes) {
      const inputValues = changes[inputName];
      // console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      // console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      // console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);

      if (inputName === 'inputData') {
        if (this.inputData.length > 5) {
          console.log('length increased');
        }
      }
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Component is being destroyed');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('Component ngAfterViewInit');
  }
}
