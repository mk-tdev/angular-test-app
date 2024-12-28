import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserData } from '../../models/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  userService: UsersService = inject(UsersService);

  userData: UserData[] = [];
  selectedUser: UserData | undefined;

  constructor() {}

  ngOnInit(): void {
    this.userData = this.userService.getAllUserList();
  }

  getUserDetails(id: number): void {
    this.selectedUser = this.userService.getUserDataById(id)
  }
}
