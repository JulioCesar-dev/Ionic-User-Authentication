import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent implements OnInit {

  constructor(
    public toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  async send() {
    const toast = await this.toastController.create({
      message: 'Email de recuperação de senha enviado com sucesso!',
      duration: 2000
    });
    toast.present();

    this.router.navigate(['login']);
  }
}
