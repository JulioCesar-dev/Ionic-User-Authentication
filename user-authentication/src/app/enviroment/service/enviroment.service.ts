import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmbeddedViewDTO } from 'src/app/embedded/dto/embedded-view.dto';
import { environment } from 'src/environments/environment';
import { EnviromentViewDTO } from '../dto/enviroment-view.dto';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  API_ORIGIN = environment.backEndApiOrigin;

  constructor(private httpClient: HttpClient ) { }

  getAllEnviroments(): Observable<EnviromentViewDTO[]> {
    return this.httpClient.get<EnviromentViewDTO[]>(`${this.API_ORIGIN}/enviroments`);
  }

  getEnviromentById(id: number): Observable<EnviromentViewDTO> {
    return this.httpClient.get<EnviromentViewDTO>(`${this.API_ORIGIN}/enviroments/${id}`);
  }
}
