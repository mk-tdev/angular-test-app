import { Injectable } from '@angular/core';
import { UserData } from '../models/common';
import { userData } from '../app-config/data';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private loggerService: LoggerService) {}

  protected userList: UserData[] = userData;

  getAllUserList(): UserData[] {
    this.loggerService.log('Getting all user list!');
    return this.userList;
  }

  getUserDataById(id: number): UserData | undefined {
    return this.userList.find((user) => {
      return user.id === id;
    });
  }

  getUserCount(): number {
    return this.userList.length | 0;
  }
}
