import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  API_ENDPOINT_PROVIDER,
  SHOULD_MOCK_PROVIDER,
} from 'src/app/providers/tokens';
import { MOCK_OFFICES } from '../mocks/offices';
import { Office } from '../models/office';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint: string,
    @Inject(SHOULD_MOCK_PROVIDER) private shouldMock: boolean
  ) {
    this.url = `${this.endpoint}/users`;
  }

  createOffice(payload: Office) {
    if (this.shouldMock) return of(payload).pipe(delay(500));

    return this.http.post(this.url, payload);
  }

  getOffices() {
    if (this.shouldMock) return of(MOCK_OFFICES).pipe(delay(500));
    return this.http.get<Office[]>(this.url);
  }

  updateOffice(id: string, payload: Office) {
    if (this.shouldMock) return of(payload).pipe(delay(500));
    return this.http.put(`${this.url}/${id}`, payload);
  }

  deletetOffice(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
