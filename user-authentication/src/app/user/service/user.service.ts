import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_ORIGIN: string = environment.backEndApiOrigin;

  constructor(private httpClient: HttpClient) { }

  create(user: User): Observable<void> {
    return this.httpClient.post<void>(`${this.API_ORIGIN}/users`, user);
  }
}
