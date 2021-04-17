import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FieldSpecifition } from 'src/app/form-edit/form-edit.component';
import { Enviroment, EnviromentType } from '../model/enviroment.model';

@Component({
  selector: 'app-enviroment-edit',
  templateUrl: './enviroment-edit.component.html',
  styleUrls: ['./enviroment-edit.component.scss'],
})
export class EnviromentEditComponent implements OnInit {

  fields: FieldSpecifition[];
  enviroment: Enviroment;
  title: string;

  constructor(private router: Router) { 
    this.title = "Ambiente";
    this.enviroment = new Enviroment();

    this.fields = [{
      label: 'Bloco',
      name: 'block',
      itemType: 'input',
      type: 'text',
      required: true,
      maxSize: 1
    },{
      label: 'Unidade',
      name: 'unit',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'Tipo de Ambiente',
      name: 'type',
      itemType: 'select',
      options: [{
        name: 'Comportamental',
        value: EnviromentType.BEHAVIORAL
      },{
        name: 'Laboratório',
        value: EnviromentType.LABORATORY
      },{
        name: 'Auditório',
        value: EnviromentType.AUDITORIUM
      },{
        name: 'Anfiteatro',
        value: EnviromentType.AMPHITHEATER
      },{
        name: 'Administrativo',
        value: EnviromentType.ADMINISTRATIVE
      }],
      required: true
    },{
      label: 'Nome',
      name: 'name',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'Capacidade',
      name: 'capacity',
      itemType: 'input',
      type: 'number',
      required: true
    },{
      label: 'Quantidade de Computadores',
      name: 'amountOfComputers',
      itemType: 'input',
      type: 'number',
      required: true
    },{
      label: 'IP da Câmera',
      name: 'cameraIp',
      itemType: 'input',
      type: 'text',
      required: true
    }];
  }

  ngOnInit() {}

  save(object: any){
    this.router.navigate(['enviroment/list'])
    console.log(object);
  }
}
