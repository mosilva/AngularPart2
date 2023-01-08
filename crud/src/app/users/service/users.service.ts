import { User } from './../models/user.model';
import { State } from './../models/states.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users!: User[];

  constructor() {}

  public getStatesOfBrazil(): State[] {
    return [{ name: 'Acre', abbr: 'AC' }];
  }

  public saveUser(userNew: User): void {
    this.users = JSON.parse(localStorage.getItem('USERS') || '[]');
    this.users.push(userNew);
    localStorage.setItem('USERS', JSON.stringify(this.users));
  }
}
