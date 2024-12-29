import {
  of,
  fromEvent,
  interval,
  map,
  filter,
  take,
  toArray,
  combineLatest,
  forkJoin,
} from 'rxjs';

export const numbers$ = of(1, 2, 3, 4, 5, 6);

export const clicks$ = fromEvent(document, 'click');
export const keypress$ = fromEvent(document, 'keypress');

export const seconds$ = interval(1000);

export const doubledNumbers$ = numbers$.pipe(map((value) => value * 2));
export const evenNumbers$ = numbers$.pipe(filter((value) => value % 2 === 0));

export const firstTwoNumbers$ = numbers$.pipe(take(2)).pipe(toArray());

const name$ = of('John', 'Jane', 'Doe');
const age$ = of(30, 25);

export const nameAndAge$ = forkJoin([name$, age$]);
