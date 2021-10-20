import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  API_ENDPOINT_PROVIDER,
  SHOULD_MOCK_PROVIDER,
} from 'src/app/providers/tokens';
import { MOCK_USERS } from '../mocks/users';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint: string,
    @Inject(SHOULD_MOCK_PROVIDER) private shouldMock: boolean
  ) {
    this.url = `${this.endpoint}/users`;
  }

  createUser(user: User) {
    if (this.shouldMock) return of(user).pipe(delay(500));

    return this.http.post(this.url, user);
  }

  getUsers() {
    if (this.shouldMock) return of(MOCK_USERS).pipe(delay(500));
    return this.http.get<User[]>(this.url);
  }

  updateUser(id: string, user: User) {
    if (this.shouldMock) return of(user).pipe(delay(500));
    return this.http.put(`${this.url}/${id}`, user);
  }

  deletetUser(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
