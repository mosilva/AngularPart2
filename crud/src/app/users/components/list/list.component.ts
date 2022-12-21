import { User } from './../../models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public users: User[] = JSON.parse(localStorage.getItem('USERS') || '[]');
}
