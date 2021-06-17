import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockListDTO } from '../dto/block-list-dto';
import { BlockService } from '../service/block.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss'],
})
export class BlockListComponent implements OnInit {

  title: string;
  blocks: BlockListDTO[];

  constructor(private route: Router,
    private blockService: BlockService) { 
    this.title = "Bloco";
    this.blocks = [];
  }

  ngOnInit() {
    this.blockService.getAllBlocks().subscribe(blocks => {
      this.blocks = blocks;
    })
  }

  labelResolver(block: any) {
    return `${block.name} - ${block.floor}`;
  }

  edit() {
    this.route.navigate(['blocks/:id/edit'])
  }

  new() {
    this.route.navigate(['blocks/new'])
  }
}
