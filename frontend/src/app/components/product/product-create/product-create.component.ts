import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Produto de Teste',
    price: 125.98,
  }

  constructor(private producService: ProductService,
    private router: Router) { }

  ngOnInit(): void { }

  // Acessa o service de criação de produto e executa;
  // Exibe a mensagem de criação de produto;
  // Volta pra tela de cadastro de produtos;
  createProduct(): void {
    this.producService.create(this.product).subscribe(() => {
      this.producService.showMensage('Produto criado!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
