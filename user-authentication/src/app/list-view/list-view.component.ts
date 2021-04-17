import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {

  @Input() getLabelItem: any;
  @Input() items: any[];

  @Output() selectItemEvent: EventEmitter<any>;
  @Output() newItemEvent: EventEmitter<any>;

  constructor() {
    this.items = [];

    this.selectItemEvent = new EventEmitter<any>();
    this.newItemEvent = new EventEmitter<void>();
  }

  ngOnInit() {}

  newItem() {
    this.newItemEvent.emit();
  }

  editItem(item) {
    this.selectItemEvent.emit(item)
  }
}