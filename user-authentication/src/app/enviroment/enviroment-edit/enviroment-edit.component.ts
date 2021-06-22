import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FieldSpecifition } from 'src/app/form-edit/form-edit.component';
import { EnviromentViewDTO } from '../dto/enviroment-view.dto';
import { EnviromentService } from '../service/enviroment.service';

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
    private enviromentService: EnviromentService) { 
    this.title = "Ambiente";
    this.enviroment = new EnviromentViewDTO();

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
      name: 'cameraIp',
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
      name: 'blockName',
      itemType: 'input',
      type: 'text',
      required: true,
      maxSize: 1
    },{
      label: 'Tipo de Ambiente',
      name: 'type',
      type: 'text',
      itemType: 'input',
      required: true
    }];
  }

  ngOnInit() {
    const id:any = this.route.snapshot.paramMap.get('id');
    
    if (id != null) {
      this.enviromentService.getEnviromentById(id).subscribe(object => {
        this.enviroment = object;
      })
    }
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

      this.router.navigate(['enviroments/list'])
    }, async error => {
      const toast = await this.toastController.create({
        message: 'Erro ao processar a requisição!',
        duration: 2000
      });

      toast.present();
    })    
  }
}
