import { catchError, EMPTY, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BASE_API_URL = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // Configura a caixa de texto de exibição
  // de mensagem do snackBar exbido ao executar
  // uma ação de criação de produtos.
  showMensage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  // Serviço de criação de produto no backend
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.BASE_API_URL, product)
      .pipe(
        map((obj) => obj),
        catchError((err) => this.errorHandler(err)));
  }

  // Serviço de leitura de produtos do backend;
  // Observable recebe um array de produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_API_URL)
      .pipe(
        map((obj) => obj),
        catchError((err) => this.errorHandler(err)));
  }

  // Serviço que obtém produto por ID
  // Este método é utilizado p/ possibilitar o acesso
  // aos dados que serão modificados
  readById(id: string): Observable<Product> {
    const url = `${this.BASE_API_URL}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        map((obj) => obj),
        catchError((err) => this.errorHandler(err)));
  }

  // Serviço que atualiza o produto 
  // a partir de seu ID
  update(product: Product): Observable<Product> {
    const url = `${this.BASE_API_URL}/${product.id}`;
    return this.http.put<Product>(url, product)
      .pipe(
        map((obj) => obj),
        catchError((err) => this.errorHandler(err)));
  }

  // Serviço que deleta um produto 
  // a partir de seu ID
  delete(id: string): Observable<Product> {
    const url = `${this.BASE_API_URL}/${id}`;
    return this.http.delete<Product>(url)
      .pipe(
        map((obj) => obj),
        catchError((err) => this.errorHandler(err)));
  }

  // Serviço de exibição de erro
  // para eventuais problemas em requisições no backend
  errorHandler(error: any): Observable<any> {
    this.showMensage('Erro: Conexão recusada!', true);
    return EMPTY;
  }
}
