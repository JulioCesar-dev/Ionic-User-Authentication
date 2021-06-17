import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ambiente', url: '/enviroment', icon: 'layers' },
    { title: 'Embarcado', url: '/embedded', icon: 'calculator' },
    { title: 'Bloco', url: '/blocks', icon: 'business' }
  ];

  constructor(private location: Location) {}

  isAuthenticated() {
    return this.location.path() == '/login' || this.location.path() == '/passwordRecovery' || this.location.path() == '/user';
  }
}
