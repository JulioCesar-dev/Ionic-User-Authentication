import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private toastController: ToastController,
    private loginService: LoginService) {
  }

  ngOnInit() {}

  async login(email, password) {
    this.loginService.authenticate(email, password).subscribe(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate([''])
    }, async error => {
      const toast = await this.toastController.create({
        message: 'Email ou senha incorreta!',
        duration: 2000
      });

      toast.present();
    });
  }

  newUser() {
    this.router.navigate(['user'])
  }

  passwordRecovery() {
    this.router.navigate(['passwordRecovery'])
  }
}
