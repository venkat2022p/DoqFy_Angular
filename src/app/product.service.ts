import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api_url = "https://fakestoreapi.com/products"

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getProducts(): Observable<any> {
    return this.http.get(this.api_url).pipe(catchError(this.errorHandler));
  }
  getProduct(id: any): Observable<any> {
    return this.http.get(this.api_url + '/' + id).pipe(catchError(this.errorHandler));
  }
  createProducts(product: any): Observable<any> {
    return this.http.post(this.api_url, product).pipe(catchError(this.errorHandler));
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.api_url + '/' + id).pipe(catchError(this.errorHandler));
  }
  updateProduct(inputProduct: object, productId: number): Observable<any> {
    return this.http.put(`${this.api_url}/${productId}`, inputProduct).pipe(catchError(this.errorHandler));

  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
