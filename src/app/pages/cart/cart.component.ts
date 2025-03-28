import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <h2 class="text-2xl">Shopping Cart</h2>
    <ul class="p-6 flex flex-col gap-4">
      @for (cartItem of cartService.cart(); track cartItem.id) {
      <app-cart-item [cartItem]="cartItem" />
      }
    </ul>
  `,
  styles: ``,
})
export class CartComponent {
  cartService = inject(CartService);
}
