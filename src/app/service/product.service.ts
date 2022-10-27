import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = `http://localhost:3000/products`
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.API}`)
  }
  get(id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.API}/${id}`)
  }
  Add(product: any): Observable<IProduct[]> {
    return this.httpClient.post<IProduct[]>(`${this.API}`, product)
  }
  Remove(id: number): Observable<IProduct[]> {
    return this.httpClient.delete<IProduct[]>(`${this.API}/${id}`)
  }
  Update(product: IProduct): Observable<IProduct[]> {
    return this.httpClient.put<IProduct[]>(`${this.API}/${product.id}`, product)
  }

}
