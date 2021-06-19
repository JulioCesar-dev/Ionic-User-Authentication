import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ambiente', url: '/enviroments', icon: 'layers' },
    { title: 'Embarcado', url: '/embeddeds', icon: 'calculator' },
    { title: 'Bloco', url: '/blocks', icon: 'business' },
    { title: 'Unidades', url: '/units', icon: 'business' },
    { title: 'Regional', url: '/regionals', icon: 'business' }
  ];

  constructor(private location: Location) {}

  isAuthenticated() {
    return this.location.path() == '/login' || this.location.path() == '/passwordRecovery' || this.location.path() == '/user';
  }
}
