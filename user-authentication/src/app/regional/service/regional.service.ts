import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegionalViewDTO } from '../dto/regional-view.dto';

@Injectable({
  providedIn: 'root'
})
export class RegionalService {

  API_ORIGIN = environment.backEndApiOrigin;

  constructor(private httpClient: HttpClient ) { }

  getAllRegionals(): Observable<RegionalViewDTO[]> {
    return this.httpClient.get<RegionalViewDTO[]>(`${this.API_ORIGIN}/regionals`);
  }

  getRegionalById(id: number): Observable<RegionalViewDTO> {
    return this.httpClient.get<RegionalViewDTO>(`${this.API_ORIGIN}/regionals/${id}`);
  }
}
