import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
})
export class FormEditComponent implements OnInit {
  SELECT_TYPE: string = 'select';
  INPUT_TYPE: string = 'input';

  @Input() fields: FieldSpecifition[];
  @Input() object: any;
  @Input() showRemoveButton: boolean = false;
  @Output() saveEvent: EventEmitter<any>;
  @Output() removeEvent: EventEmitter<any>;
  
  constructor() {
    this.fields = [];
    this.object = {};
    this.saveEvent = new EventEmitter<any>();
    this.removeEvent = new EventEmitter<any>();
  }

  ngOnInit() {}

  save() {
    this.saveEvent.emit(this.object);
  }

  remove() {
    this.removeEvent.emit(this.object);
  }
}

export class FieldSpecifition {
  label?: any;
  itemType: string;
  type?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  options?: any[];
  multiple?: boolean;
  maxSize?: number;
}