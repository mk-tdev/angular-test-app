import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Injectable({ providedIn: 'root' })
export class userListGuardGuard implements CanActivate {
  constructor(private todoService: TodoService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.todoService.getTodoList().length > 0) {
      return true;
    }
    return false;
  }
}
