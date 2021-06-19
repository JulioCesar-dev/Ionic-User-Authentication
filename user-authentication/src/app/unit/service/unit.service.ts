import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnitViewDTO } from '../dto/unit-view.dto';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  API_ORIGIN = environment.backEndApiOrigin;

  constructor(private httpClient: HttpClient ) { }

  getAllUnits(): Observable<UnitViewDTO[]> {
    return this.httpClient.get<UnitViewDTO[]>(`${this.API_ORIGIN}/units`);
  }
}
