import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_ORIGIN: string = environment.backEndApiOrigin;

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.API_ORIGIN}/login`, {email, password});
  }
}
