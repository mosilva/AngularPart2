import { Component, OnInit } from '@angular/core';
import { User } from './users/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public users: User[] = [
    {
      id: crypto.randomUUID(),
      name: 'Amaral da Fonseca',
      profession: 'Analista de Sistemas',
      birthDate: '04/15/1988',
      documentNumber: '01234567890',
      address: {
        id: crypto.randomUUID(),
        zipCode: '69983970',
        street: 'Avenida Principal',
        number: 154,
        complement: 'Bloco 03 Apto 404',
        neighborhood: 'Centro',
        city: 'Marechal Thaumaturgo',
        state: 'AC',
      },
      contact: {
        phone: '82998745862',
        email: 'amaral@email.com',
      },
    },
    {
      id: crypto.randomUUID(),
      name: 'Murilo Moreira',
      profession: 'Operador de Empilhadeira',
      birthDate: '08/19/2001',
      documentNumber: '44222902071',
      address: {
        id: crypto.randomUUID(),
        zipCode: '69955970',
        street: 'Rua Coronel José Ferreira',
        number: 154,
        complement: 'Bloco 03 Apto 404',
        neighborhood: 'Centro',
        city: 'Santa Rosa do Purus',
        state: 'AC',
      },
      contact: {
        phone: '82999543621',
        email: 'murilo@email.com',
      },
    },
  ];

  ngOnInit(): void {
    localStorage.setItem('USERS', JSON.stringify(this.users));
  }
}
