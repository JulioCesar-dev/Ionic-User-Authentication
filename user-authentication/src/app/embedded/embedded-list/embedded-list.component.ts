import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Embedded } from '../model/embedded.model';

@Component({
  selector: 'app-embedded-list',
  templateUrl: './embedded-list.component.html',
  styleUrls: ['./embedded-list.component.scss'],
})
export class EmbeddedListComponent implements OnInit {

  title: string;
  embeddeds: Embedded[];

  constructor(private route: Router) { 
    this.title = "Embarcado";

    this.embeddeds = [{
      id: 1,
      description: 'Embarcado A',
      status: 'Status A',
      firmware: 'Firmware A',
      ip: '192.168.0.2',
      mac: '00:1D:7D:B2:34:F9',
      gatewayIp: '192.168.0.1',
      mqttIp: '192.168.10.1',
      mqttPort: 4562,
      mqttTopics: ['Tópico A']
    },{
      id: 2,
      description: 'Embarcado B',
      status: 'Status B',
      firmware: 'Firmware B',
      ip: '192.168.0.3',
      mac: '00:1D:7D:B2:34:F9',
      gatewayIp: '192.168.0.1',
      mqttIp: '192.168.10.1',
      mqttPort: 4562,
      mqttTopics: ['Tópico A']
    }]
  }

  ngOnInit() {}

  labelResolver(embedded: any) {
    return embedded.description;
  }

  edit() {
    this.route.navigate(['embedded/:id/edit'])
  }

  new() {
    this.route.navigate(['embedded/new'])
  }
}
