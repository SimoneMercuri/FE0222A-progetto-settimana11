import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError,Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  productUrl = 'http://localhost:4201/products';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(catchError(err => {
      return throwError(this.getErrorMess(err.status));
    }));

  }
  private getErrorMess(status: number) {
    let mess = '';
    switch (status) {
      case 404:
        mess = 'Risorsa non trovata';
        break;
      case 500:
        mess = 'Errore interno del server';
        break;
      default:
        mess = 'Qualcosa non va';
        break;
    }
    return mess;
  }

}

