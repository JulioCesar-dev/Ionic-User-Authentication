import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: User;
  repeatPassword: string;

  constructor(
    private router: Router,
    private toastController: ToastController) {
    this.user = new User();
  }

  ngOnInit() {}

  async save() {
    const toast = await this.toastController.create({
      message: 'Usuário cadastrado com sucesso!',
      duration: 2000
    });

    this.router.navigate(['login'])
  }
}
