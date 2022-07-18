import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // Na inicalização do componente,
  // há uma chamada que recebe um ID a partir da navegação
  // e na sequência faz a chamada do serviço de leitura 
  // do produto por ID
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  // Atualiza o produto a partir do ID
  // capturado na inicialização do componente;
  // exibe a mensagem de sucesso de atualização
  // e volta para a tela de produtos
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMensage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
