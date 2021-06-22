import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: User;
  repeatPassword: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastController: ToastController) {
    this.user = new User();
  }

  ngOnInit() {}

  async save(user: User) {
    this.userService.create(user).subscribe(async ()=>{
      const toast = await this.toastController.create({
        message: 'Usuário cadastrado com sucesso!',
        duration: 2000
      });

      toast.present();
    }, async error => {
      const toast = await this.toastController.create({
        message: 'Falha ao processar a solicitação!',
        duration: 2000
      });
    })

    this.router.navigate(['login'])
  }
}
