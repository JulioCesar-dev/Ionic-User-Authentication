import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldSpecifition } from 'src/app/form-edit/form-edit.component';
import { EmbeddedViewDTO } from '../dto/embedded-view.dto';
import { EmbeddedEditDTO } from '../dto/embedded-edit.dto';
import { EmbeddedService } from '../service/embedded.service';

@Component({
  selector: 'app-embedded-edit',
  templateUrl: './embedded-edit.component.html',
  styleUrls: ['./embedded-edit.component.scss'],
})
export class EmbeddedEditComponent implements OnInit {

  fields: FieldSpecifition[];
  embedded: EmbeddedViewDTO;
  title: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private embeddedService: EmbeddedService) { 
    this.title = "Embarcado";
    this.embedded = new EmbeddedEditDTO();

    this.fields = [{
      label: 'Descrição',
      name: 'description',
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
      label: 'Status',
      name: 'status',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'IP do Embarcado',
      name: 'embeddedIp',
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
      label: 'Máscara',
      name: 'mask',
      itemType: 'input',
      type: 'text',
      required: true
    },
    {
      label: 'Senha do Wifi',
      name: 'wifiPassword',
      itemType: 'input',
      type: 'text',
      required: true
    },
    {
      label: 'SSID',
      name: 'ssid',
      itemType: 'input',
      type: 'text',
      required: true
    },
    {
      label: 'Status',
      name: 'status',
      itemType: 'input',
      type: 'text',
      required: true
    }];
  }

  ngOnInit() {
    const id:number = +this.route.snapshot.paramMap.get('id');
    this.embeddedService.getEmbeddedById(id).subscribe(object => {
      this.embedded = object;
    });
  }

  save(object: any){
    this.router.navigate(['embedded/list'])
    console.log(object);
  }
}
