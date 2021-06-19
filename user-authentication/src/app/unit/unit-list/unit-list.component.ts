import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitViewDTO } from '../dto/unit-view.dto';
import { UnitService } from '../service/unit.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent implements OnInit {

  title: string;
  units: UnitViewDTO[];

  constructor( 
    private router: Router,
    private unitService: UnitService
    ) { 
    this.title = "Unidades";
    this.units = [];
  }

  ngOnInit() {
    this.unitService.getAllUnits().subscribe((units)=>{
      this.units = units;
    })
  }

  edit(unit: any){
    this.router.navigate([`units/${unit.id}/edit`]);
  }

  new() {
    this.router.navigate(["units/new"]);
  }

  labelResolver(unit: any) {
    return unit.name;
  }
}
