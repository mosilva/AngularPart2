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
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      id: new FormControl(crypto.randomUUID()),
      name: new FormControl(),
      profession: new FormControl(),
      birthDate: new FormControl(),
      documentNumber: new FormControl(),
      address: new FormGroup({
        id: new FormControl(crypto.randomUUID()),
        street: new FormControl(),
        number: new FormControl(),
        complement: new FormControl(),
        neighborhood: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        zipCode: new FormControl(),
      }),
      contact: new FormGroup({
        phone: new FormControl(),
        email: new FormControl('', [Validators.email]),
      }),
    });
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
