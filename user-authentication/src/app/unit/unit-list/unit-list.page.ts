import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Unit } from '../model/unit.model';


@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.page.html',
  styleUrls: ['./unit-list.page.scss'],
})
export class UnitListPage implements OnInit {
  units: Unit[];
  title: string;

  constructor(
    private router: Router,

  ) { 
    this.title = "Unidades";

    this.units = [{
      id: 1,
      name: 'Unidade A',
      location: 'Localização A',
      phone: '12345789'
    }, {
      id: 2,
      name: 'Unidade B',
      location: 'Localização B',
      phone: '12345789'
    }];
  }

  ngOnInit() {}

  edit(unit: any){
    this.router.navigate([`unit/${unit.id}/edit`]);
  }

  new() {
    this.router.navigate(["unit/new"]);
  }

  labelResolver(unit: any) {
    return unit.name;
  }
}
