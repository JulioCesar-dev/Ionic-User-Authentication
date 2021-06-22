import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmbeddedViewDTO } from 'src/app/embedded/dto/embedded-view.dto';
import { environment } from 'src/environments/environment';
import { EnviromentEditDTO } from '../dto/enviroment-edit.dto';
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

  save(enviroment: EnviromentEditDTO): Observable<void> {
    if (enviroment.id) {
      return this.httpClient.put<void>(`${this.API_ORIGIN}/enviroments/${enviroment.id}`, enviroment);
    } else {
      return this.httpClient.post<void>(`${this.API_ORIGIN}/enviroments`, enviroment);
    }
  }

  delete(envormentId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_ORIGIN}/enviroments/${envormentId}`);
  }
}
