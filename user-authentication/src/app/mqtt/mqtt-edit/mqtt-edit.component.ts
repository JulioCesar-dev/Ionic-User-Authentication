import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FieldSpecifition } from 'src/app/form-edit/form-edit.component';
import { MQTT } from '../model/mqtt.model';

@Component({
  selector: 'app-mqtt-edit',
  templateUrl: './mqtt-edit.component.html',
  styleUrls: ['./mqtt-edit.component.scss'],
})
export class MqttEditComponent implements OnInit {
  
  fields: FieldSpecifition[];
  title: string;

  constructor(private router: Router) { 
    this.title = "MQTT";

    this.fields = [{
      label: 'Descrição',
      name: 'description',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'IP',
      name: 'ip',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'Porta',
      name: 'port',
      itemType: 'input',
      type: 'number',
      required: true
    },{
      label: 'Tópicos',
      name: 'topics',
      itemType: 'input',
      type: 'text',
      required: true
    }];
  }

  ngOnInit() {}

  save(object: any){
    this.router.navigate(['mqtt/list'])
    console.log(object);
  }
}
