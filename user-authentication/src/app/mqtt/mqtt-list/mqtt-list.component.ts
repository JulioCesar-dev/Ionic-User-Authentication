import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MQTT } from '../model/mqtt.model'

@Component({
  selector: 'app-mqtt-list',
  templateUrl: './mqtt-list.component.html',
  styleUrls: ['./mqtt-list.component.scss'],
})
export class MqttListComponent implements OnInit {

  mqtts: MQTT[];
  title: string;

  constructor(
    private router: Router,

  ) { 
    this.title = "MQTT";

    this.mqtts = [{
      id: 1,
      description: 'MQTT A',
      ip: '192.168.0.1',
      port: 4568,
      topics: []
    }, {
      id: 2,
      description: 'MQTT B',
      ip: '192.168.0.2',
      port: 4568,
      topics: []
    }];
  }

  ngOnInit() {}

  edit(unit: any){
    this.router.navigate([`mqtt/${unit.id}/edit`]);
  }

  new() {
    this.router.navigate(["mqtt/new"]);
  }

  labelResolver(mqtt: any) {
    return mqtt.description;
  }
}
