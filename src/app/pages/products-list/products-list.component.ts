import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <ul class="p-8 grid grid-cols-3 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />

      }
    </ul>
  `,
  styles: ``,
})
export class ProductsListComponent {
  async ngOnInit() {
    const response = await fetch(
      'https://dummyjson.com/products/category/beauty'
    );
    const productsData = await response.json();
    this.products.set(productsData.products);
  }

  products = signal<Product[]>([]);
}
