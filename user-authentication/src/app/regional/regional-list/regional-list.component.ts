import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionalViewDTO } from '../dto/regional-view.dto';
import { RegionalService } from '../service/regional.service';

@Component({
  selector: 'app-regional-list',
  templateUrl: './regional-list.component.html',
  styleUrls: ['./regional-list.component.scss'],
})
export class RegionalListComponent implements OnInit {

  title: string;
  regionals: RegionalViewDTO[];

  constructor(private route: Router,
    private regionalService: RegionalService) { 
    this.title = "Regional";
    this.regionals = [];
  }

  ngOnInit() {
    this.regionalService.getAllRegionals().subscribe(blocks => {
      this.regionals = blocks;
    })
  }

  labelResolver(block: any) {
    return `${block.name} - ${block.floor}`;
  }

  edit() {
    this.route.navigate(['regionals/:id/edit'])
  }

  new() {
    this.route.navigate(['regionals/new'])
  }
}
