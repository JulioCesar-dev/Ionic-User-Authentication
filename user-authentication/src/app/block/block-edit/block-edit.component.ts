import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FieldSpecifition } from 'src/app/form-edit/form-edit.component';

@Component({
  selector: 'app-block-edit',
  templateUrl: './block-edit.component.html',
  styleUrls: ['./block-edit.component.scss'],
})
export class BlockEditComponent implements OnInit {

  title: string;
  fields: FieldSpecifition[];

  constructor(private router: Router) {
    this.title = "Bloco";

    this.fields = [{
      label: 'Nome',
      name: 'name',
      itemType: 'input',
      type: 'text',
      required: true
    }]
  }

  ngOnInit() {}

  save(block: any) {
    this.router.navigate(['block/list'])
  }
}
