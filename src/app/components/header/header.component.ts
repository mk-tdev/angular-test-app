import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  userDataCount: number = 0;
  todoCount: number = 0;

  constructor(
    private userService: UsersService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.userDataCount = this.userService.getUserCount();
    this.todoCount = this.todoService.getTodoList().length;
  }
}
