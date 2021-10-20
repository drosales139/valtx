import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  API_ENDPOINT_PROVIDER,
  SHOULD_MOCK_PROVIDER,
} from 'src/app/providers/tokens';
import { MOCK_PRODUCTS } from '../mocks/product';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint: string,
    @Inject(SHOULD_MOCK_PROVIDER) private shouldMock: boolean
  ) {
    this.url = `${this.endpoint}/users`;
  }

  createProduct(payload: Product) {
    if (this.shouldMock) return of(payload).pipe(delay(500));

    return this.http.post(this.url, payload);
  }

  getProducts() {
    if (this.shouldMock) return of(MOCK_PRODUCTS).pipe(delay(500));
    return this.http.get<Product[]>(this.url);
  }

  updateProduct(id: string, payload: Product) {
    if (this.shouldMock) return of(payload).pipe(delay(500));
    return this.http.put(`${this.url}/${id}`, payload);
  }

  deletetProduct(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
