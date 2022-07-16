import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  // Na inicialização do componente é chamado o serviço 
  // de leitura dos dados do backend, onde o resultado da 
  // chamada é injetado na variável products...
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(this.products);
    });
  }

}
