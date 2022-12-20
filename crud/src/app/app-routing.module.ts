import { NotFoundComponent } from './users/not-found/not-found.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersComponent } from './users/users/users.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'create-users',
    component: CreateUserComponent,
  },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
