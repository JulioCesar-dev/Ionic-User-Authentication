import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  insert(resourceName: string, object: Identifiable) {
    let resourceControl = this.getResourceControl(resourceName);
    
    resourceControl.add(object);

    this.updateResourceControl(resourceControl);
  }

  getAll(resourceName: string): Identifiable[] {
    return this.getResourceControl(resourceName).getAll();
  }

  get(resourceName: string, key: number): Identifiable {
    let resourceControl = this.getResourceControl(resourceName);

    return resourceControl.get(key);
  }

  update(resourceName: string, object: Identifiable) {
    let resourceControl = this.getResourceControl(resourceName);

    resourceControl.update(object);

    this.updateResourceControl(resourceControl);
  }

  remove(resourceName: string, key: number) {
    let resourceControl = this.getResourceControl(resourceName);

    resourceControl.remove(key);

    this.updateResourceControl(resourceControl);
  }

  private getResourceControl(resourceName: string): ResourceControl {
    let resourceControl = this.storage.getItem(resourceName);

    if (resourceControl) {
      return JSON.parse(resourceControl) as ResourceControl; 
    } else {
      return this.createResourceControl(resourceName);
    }
  }

  private createResourceControl(resourceName: string): ResourceControl {
    const resourceControl = new ResourceControl(resourceName);

    this.storage.setItem(resourceName, JSON.stringify(resourceControl));

    return resourceControl;
  }

  private updateResourceControl(resourceControl: ResourceControl) {
    this.storage.setItem(resourceControl.resourceName, JSON.stringify(resourceControl));
  }
}

export interface Identifiable {
  getId(): number;
  setId(id: number): void;
}

class ResourceControl {
  resourceName: string;

  private sequence: number;
  private objects: Identifiable[]

  constructor(resourceName: string) {
    this.resourceName = resourceName;
    this.objects = [];
    this.sequence = 0;
  }

  add(object: Identifiable) {
    this.sequence++;

    object.setId(this.sequence);

    this.objects.push(object);
  }

  update(object: Identifiable) {
    let indexObj = this.objects.findIndex(obj => obj.getId() == object.getId());

    if (indexObj > 0) {
      this.objects[indexObj] = object;
    }
  }

  get(key: number) {
    const result = this.objects.filter(obj => obj.getId() == key);

    if (result.length > 0) {
      return result[0];
    }

    return null;
  }

  getAll():Identifiable[] {
    return this.objects;
  }

  remove(key: number) {
    this.objects = this.objects.filter(obj => obj.getId() != key);
  }
}