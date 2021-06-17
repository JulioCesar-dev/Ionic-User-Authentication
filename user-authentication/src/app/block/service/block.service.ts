import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlockListDTO } from '../dto/block-list-dto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlockService {

  API_ORIGIN = environment.backEndApiOrigin;

  constructor(private httpClient: HttpClient ) { }

  getAllBlocks(): Observable<BlockListDTO[]> {
    return this.httpClient.get<BlockListDTO[]>(`${this.API_ORIGIN}/blocks`);
  }
}
