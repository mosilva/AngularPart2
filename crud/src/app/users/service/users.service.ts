import { State } from './../models/states.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  public getStatesOfBrazil(): State[] {
    return [{ name: 'Acre', abbr: 'AC' }];
  }
}
