import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmbeddedViewDTO } from '../dto/embedded-view.dto';

@Injectable({
  providedIn: 'root'
})
export class EmbeddedService {

  API_ORIGIN = environment.backEndApiOrigin;

  constructor(private httpClient: HttpClient ) { }

  getAllEmbedded(): Observable<EmbeddedViewDTO[]> {
    return this.httpClient.get<EmbeddedViewDTO[]>(`${this.API_ORIGIN}/embeddeds`);
  }

  getEmbeddedById(id: number): Observable<EmbeddedViewDTO> {
    return this.httpClient.get<EmbeddedViewDTO>(`${this.API_ORIGIN}/embeddeds/${id}`);
  }
}
