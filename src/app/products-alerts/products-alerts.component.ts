import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.scss']
})
export class ProductsAlertsComponent {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
