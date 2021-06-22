import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnviromentViewDTO } from '../dto/enviroment-view.dto';
import { EnviromentService } from '../service/enviroment.service';

@Component({
  selector: 'app-enviroment-list',
  templateUrl: './enviroment-list.component.html',
  styleUrls: ['./enviroment-list.component.scss'],
})
export class EnviromentListComponent implements OnInit {

  enviroments: EnviromentViewDTO[];
  title: string;

  constructor(
    private router: Router,
    private enviromentService: EnviromentService
  ) { 
    this.title = "Ambientes";
    this.enviroments = [];
  }

  ngOnInit() {
    this.enviromentService.getAllEnviroments().subscribe(objects => {
      this.enviroments = objects;
    });
  }

  edit(unit: any){
    this.router.navigate([`enviroments/${unit.id}/edit`]);
  }

  new() {
    this.router.navigate(["enviroments/new"]);
  }

  labelResolver(enviroment: any) {
    return enviroment.name;
  }
}
