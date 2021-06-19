import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmbeddedViewDTO } from '../dto/embedded-view.dto';
import { EmbeddedService } from '../service/embedded.service';

@Component({
  selector: 'app-embedded-list',
  templateUrl: './embedded-list.component.html',
  styleUrls: ['./embedded-list.component.scss'],
})
export class EmbeddedListComponent implements OnInit {

  title: string;
  embeddeds: EmbeddedViewDTO[];

  constructor(
    private route: Router,
    private embeddedService: EmbeddedService) { 
    this.title = "Embarcado";
    this.embeddeds = [];
  }

  ngOnInit() {
    this.embeddedService.getAllEmbedded().subscribe(embeddeds => {
      this.embeddeds = embeddeds;
    })
  }

  labelResolver(embedded: any) {
    return embedded.description;
  }

  edit(object) {
    this.route.navigate(['embeddeds', object.id,'edit'])
  }

  new() {
    this.route.navigate(['embeddeds/new'])
  }
}
