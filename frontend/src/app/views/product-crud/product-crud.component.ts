import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // Instancia um serviço de rotas por URL
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Função que encaminha para uma rota
  // através da url
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}
