import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enviroment, EnviromentType } from '../model/enviroment.model';

@Component({
  selector: 'app-enviroment-list',
  templateUrl: './enviroment-list.component.html',
  styleUrls: ['./enviroment-list.component.scss'],
})
export class EnviromentListComponent implements OnInit {

  enviroments: Enviroment[];
  title: string;

  constructor(
    private router: Router,

  ) { 
    this.title = "Ambientes";

    this.enviroments = [{
      id: 1,
      name: 'Ambiente A',
      unit: 'Unidade A',
      block: 'A',
      type: EnviromentType.ADMINISTRATIVE,
      capacity: 30,
      amountOfComputers: 10,
      cameraIp: '192.138.0.21'
    }, {
      id: 1,
      name: 'Ambiente B',
      unit: 'Unidade A',
      block: 'A',
      type: EnviromentType.ADMINISTRATIVE,
      capacity: 30,
      amountOfComputers: 10,
      cameraIp: '192.138.0.21'
    }];
  }

  ngOnInit() {}

  edit(unit: any){
    this.router.navigate([`enviroment/${unit.id}/edit`]);
  }

  new() {
    this.router.navigate(["enviroment/new"]);
  }

  labelResolver(enviroment: any) {
    return enviroment.name;
  }

}
