import { Injectable } from '@angular/core';
import { TodoItem } from '../models/common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todoList: TodoItem[] = [];
  // todoList$: TodoItem[] = [];

  addTodo() {
    this.todoList.push({
      id: this.todoList.length + 1,
      title: 'New Todo',
      description: 'Description',
      completed: false,
    });
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  // getTodoList$(): Observable<TodoItem[]> {
  //   return of(this.todoList);
  // }
}
