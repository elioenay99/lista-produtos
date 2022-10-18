import { Component } from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  
  products = [...products];

  share() {
    window.alert('Seu produto foi compartilhado....');
  }

  onNotify(){
    window.alert('Você será notificado quando o produto estiver a venda....')
  }

  constructor() {}

  ngOnInit(): void {}
}
