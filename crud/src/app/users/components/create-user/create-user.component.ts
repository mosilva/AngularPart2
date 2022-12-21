import { State } from './../../models/states.model';
import { UsersService } from './../../service/users.service';
import { User } from './../../models/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  public form!: FormGroup;
  createData!: User;
  public states!: State[];
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit(): void {
    this.buildForm();
    this.getStates();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      id: new FormControl(crypto.randomUUID()),
      name: new FormControl(null, [Validators.required]),
      profession: new FormControl(null, [Validators.required]),
      birthDate: new FormControl(null, [Validators.required]),
      documentNumber: new FormControl(null, [Validators.required]),
      address: new FormGroup({
        id: new FormControl(crypto.randomUUID()),
        street: new FormControl(null, [Validators.required]),
        number: new FormControl(null, [Validators.required]),
        complement: new FormControl(),
        neighborhood: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        zipCode: new FormControl(null, [Validators.required]),
      }),
      contact: new FormGroup({
        phone: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.email, Validators.required]),
      }),
    });
  }

  private getStates(): void {
    this.states = this.usersService.getStatesOfBrazil();
  }

  public CreateUserForm(event: any): void {
    this.createData = this.form.getRawValue();
    let allUser = JSON.parse(localStorage.getItem('USERS') || '');
    allUser.push(this.createData);
    console.log(allUser);
    allUser = JSON.stringify(allUser);
    localStorage.setItem('USERS', allUser);
    alert('Usuário criado com sucesso!');
    this.router.navigateByUrl('');
  }
}
