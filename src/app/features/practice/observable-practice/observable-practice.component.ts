import { Component } from '@angular/core';
import {
  clicks$,
  doubledNumbers$,
  evenNumbers$,
  firstTwoNumbers$,
  keypress$,
  nameAndAge$,
  numbers$,
  seconds$,
} from '../../../kitchen-sink/demo-rxjs';
import { map, Observable, of, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../../../models/common';

@Component({
  selector: 'app-observable-practice',
  imports: [CommonModule],
  templateUrl: './observable-practice.component.html',
  styleUrl: './observable-practice.component.scss',
})
export class ObservablePracticeComponent {
  constructor(private http: HttpClient) {}

  private subs = new Subscription();
  showTestChild = true;
  someTestName = '';

  someNumbers: number[] = [];
  secondsData: number = 0;

  localSeconds$ = seconds$;
  localfirstTwoNumbers$ = firstTwoNumbers$;

  userData$: Observable<UserData[]> = of([]);

  toggleTestChild() {
    this.showTestChild = !this.showTestChild;
  }

  getUserListData() {
    this.userData$ = this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((data: any) => {
          return data.map((ud: any) => ({
            id: ud.id,
            name: ud.name,
            email: ud.email,
          }));
        })
      );
  }

  ngOnInit(): void {
    const num = numbers$.subscribe((value) => {
      console.log(value * 5);
      this.someNumbers.push(value);
    });

    const clicks = clicks$.subscribe((value) => {
      console.log(value);
    });

    const keypresses = keypress$.subscribe((value) => {
      console.log(value);
    });

    const secondsSub = seconds$.subscribe((value) => {
      this.secondsData = value;
      // console.log(value);
    });

    this.subs.add(num);
    this.subs.add(clicks);
    this.subs.add(keypresses);
    this.subs.add(secondsSub);

    // using operators
    const doubleSub = doubledNumbers$.subscribe((value) => {
      console.log('doubleSub', value);
    });

    const evenSub = evenNumbers$.subscribe((value) => {
      console.log('evenSub', value);
    });

    nameAndAge$.subscribe((nameAndAge) => {
      console.log({ nameAndAge });
    });

    this.getUserListData();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
