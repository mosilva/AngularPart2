import { ListComponent } from './users/components/list/list.component';
import { CreateUserComponent } from './users/components/create-user/create-user.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './users/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'create',
        component: CreateUserComponent,
      },
      {
        path: '',
        component: ListComponent,
      },
    ],
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
