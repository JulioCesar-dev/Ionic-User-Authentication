import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FieldSpecifition } from 'src/app/form-edit/form-edit.component';
import { Embedded } from '../model/embedded.model';

@Component({
  selector: 'app-embedded-edit',
  templateUrl: './embedded-edit.component.html',
  styleUrls: ['./embedded-edit.component.scss'],
})
export class EmbeddedEditComponent implements OnInit {

  fields: FieldSpecifition[];
  embedded: Embedded;
  title: string;

  constructor(private router: Router) { 
    this.title = "Embarcado";
    this.embedded = new Embedded();

    this.fields = [{
      label: 'Descrição',
      name: 'description',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'Status',
      name: 'status',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'Firmware',
      name: 'firmware',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'IP do Embarcado',
      name: 'ip',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'IP do Gateway',
      name: 'gatewayIp',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'MAC',
      name: 'mac',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'IP do Servidor MQTT',
      name: 'mqttIp',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'Porta do Servidor MQTT',
      name: 'mqttPort',
      itemType: 'input',
      type: 'number',
      required: true
    },{
      label: 'Tópicos do Servidor MQTT',
      name: 'mqttTopics',
      itemType: 'input',
      type: 'text',
      required: true
    }];
  }

  ngOnInit() {}

  save(object: any){
    this.router.navigate(['embedded/list'])
    console.log(object);
  }

}
