import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BlockService } from 'src/app/block/service/block.service';
import { FieldSpecifition } from 'src/app/form-edit/form-edit.component';
import { EnviromentType } from '../dto/enviroment-type.dto';
import { EnviromentViewDTO } from '../dto/enviroment-view.dto';
import { EnviromentService } from '../service/enviroment.service';

import { mergeMap, map } from  'rxjs/operators';


@Component({
  selector: 'app-enviroment-edit',
  templateUrl: './enviroment-edit.component.html',
  styleUrls: ['./enviroment-edit.component.scss'],
})
export class EnviromentEditComponent implements OnInit {

  fields: FieldSpecifition[];
  enviroment: EnviromentViewDTO;
  title: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private enviromentService: EnviromentService,
    private blockService: BlockService) { 
    
    this.title = "Ambiente";
    this.enviroment = new EnviromentViewDTO();
  }

  async ngOnInit() {
    const id:any = this.route.snapshot.paramMap.get('id');
    
    if (id != null) {
      this.enviromentService.getEnviromentById(id).subscribe(object => {
        this.enviroment = object;
      })
    }

    const enviromentTypes: any[] = [];

    for (let type in EnviromentType) {
      enviromentTypes.push({
        value: type,
        name: EnviromentType[type]
      })
    }

    this.fields = [{
      label: 'Capacidade',
      name: 'capacity',
      itemType: 'input',
      type: 'number',
      required: true
    },{
      label: 'Descrição',
      name: 'description',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'IP da Câmera',
      name: 'cameraIP',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'Nome',
      name: 'name',
      itemType: 'input',
      type: 'text',
      required: true
    },{
      label: 'Bloco',
      name: 'blockId',
      required: true,
      itemType: 'select',
      options: await this.getBlocks() 
    },{
      label: 'Tipo de Ambiente',
      name: 'type',
      itemType: 'select',
      required: true,
      options: enviromentTypes 
    }];
  }

  save(object: any){
    this.enviromentService.save(object).subscribe(async () => {
      const toast = await this.toastController.create({
        message: object.id ? 'Ambiente atualizado com sucesso!':'Ambiente criado com sucesso!',
        duration: 2000
      });
      toast.present()

      this.router.navigate(['enviroments/list'])
    }, async error => {
      const toast = await this.toastController.create({
        message: 'Erro ao processar a requisição!',
        duration: 2000
      });

      toast.present();
    })    
  }

  remove(object: any){
    this.enviromentService.delete(object.id).subscribe(async () => {
      const toast = await this.toastController.create({
        message: 'Ambiente removido com sucesso!',
        duration: 2000
      });
      toast.present()

      this.router.navigate(['enviroments/list']).then(() => location.reload())
    }, async error => {
      const toast = await this.toastController.create({
        message: 'Erro ao processar a requisição!',
        duration: 2000
      });

      toast.present();
    })    
  }

  async getBlocks() {
    let result = await this.blockService.getAllBlocks().toPromise();
    
    return result.map(block => {
      return {
        value: block.id,
        name: `${block.name} - ${block.floor}` 
      }
    })
  }
}
