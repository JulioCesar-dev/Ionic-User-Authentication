import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    const id:number = +this.route.snapshot.paramMap.get('id');
    this.enviromentService.getEnviromentById(id).subscribe(object => {
      this.enviroment = object;
    })
  }

  save(object: any){
    this.router.navigate(['enviroments/list'])
    console.log(object);
  }
}
