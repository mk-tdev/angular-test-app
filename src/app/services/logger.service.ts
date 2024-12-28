import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(msg: unknown) {
    console.log(msg);
  }
  warn(msg: unknown) {
    console.warn(msg);
  }
  error(msg: unknown) {
    console.error(msg);
  }
}
