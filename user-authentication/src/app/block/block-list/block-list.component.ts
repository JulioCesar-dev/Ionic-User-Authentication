import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Block} from '../model/block.model';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss'],
})
export class BlockListComponent implements OnInit {
  title: string;
  blocks: Block[];

  constructor(private route: Router) { 
    this.title = "Bloco";

    this.blocks = [{
      id: 1,
      name: 'Bloco A'
    },{
      id: 2,
      name: 'Bloco B'
    }]
  }

  ngOnInit() {}

  labelResolver(block: any) {
    return block.name;
  }

  edit() {
    this.route.navigate(['block/:id/edit'])
  }

  new() {
    this.route.navigate(['block/new'])
  }
}
