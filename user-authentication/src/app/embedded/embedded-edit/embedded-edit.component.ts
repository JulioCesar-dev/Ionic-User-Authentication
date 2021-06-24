import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EnviromentService } from 'src/app/enviroment/service/enviroment.service';
import { FieldSpecifition } from 'src/app/form-edit/form-edit.component';
import { EmbeddedViewDTO } from '../dto/embedded-view.dto';
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
    private toastController: ToastController,
    private enviromentService: EnviromentService,
    private embeddedService: EmbeddedService) { 
    
    this.title = "Embarcado";
    this.embedded = new EmbeddedViewDTO();
  }

  async ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    
    if (id != null) {
      this.embeddedService.getEmbeddedById(id).subscribe(object => {
        this.embedded = object;
      });
    }

    const embeddedStatus = [
      {
        name: "Ativo",
        value: "ATIVO"
      },
      {
        name: "Inativo",
        value: "INATIVO"
      }
    ]

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
      itemType: 'select',
      options: embeddedStatus,
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
    }, {
      label: 'Ambiente',
      name: 'enviromentId',
      itemType: 'select',
      options:  await this.getEnviroments(),
      required: true
    }];
  }

  save(object: any){
    this.embeddedService.save(object).subscribe(async () => {
      const toast = await this.toastController.create({
        message: 'Embarcado criado com sucesso!',
        duration: 2000
      });
      toast.present()

      this.router.navigate(['embeddeds/list'])
    }, async error => {
      const toast = await this.toastController.create({
        message: 'Erro ao processar a requisição!',
        duration: 2000
      });

      toast.present();
    })
  }

  remove(object: any){
    this.embeddedService.delete(object.id).subscribe(async () => {
      const toast = await this.toastController.create({
        message: 'Embarcado removido com sucesso!',
        duration: 2000
      });
      toast.present()

      this.router.navigate(['embeddeds/list']).then(() => location.reload());
    }, async error => {
      const toast = await this.toastController.create({
        message: 'Erro ao processar a requisição!',
        duration: 2000
      });

      toast.present();
    })    
  }

  async getEnviroments() {
    const result = await this.enviromentService.getAllEnviroments().toPromise();

    return result.map( enviroment => {
      return {
        name: enviroment.name,
        value: enviroment.id
      }
    })
  }
}
