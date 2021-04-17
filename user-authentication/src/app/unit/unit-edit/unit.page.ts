import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage/storage.service';

import { Unit } from '../model/unit.model';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.page.html',
  styleUrls: ['./unit.page.scss'],
})
export class UnitPage implements OnInit {

  unit: Unit;
  resourceName: string;

  constructor(
    private storage: StorageService,
    private router: Router
    ) { 
    this.unit = new Unit();
    this.resourceName = 'unit';
    
  }

  ngOnInit() {
  }

  save() {
    this.router.navigate(['unit/list']);
  }
}