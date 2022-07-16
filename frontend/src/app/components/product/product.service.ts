import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_API_URL = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMensage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  // Serviço de criação de produto
  // no backend
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.BASE_API_URL, product);
  }

  // Serviço de leitura de produtos do backend;
  // Observable recebe um array de produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_API_URL);
  }
}
