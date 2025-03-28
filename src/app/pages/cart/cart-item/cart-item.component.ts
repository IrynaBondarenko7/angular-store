import { CartService } from './../../../services/cart.service';
import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <li
      class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center"
    >
      <img
        [src]="cartItem().images[0]"
        class="w-[50px] h-[50px] object-contain"
      />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ cartItem().title }}</span>
        <span class="text-sm">{{ '$' + cartItem().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(cartItem().id)"
      />
    </li>
  `,
  styles: ``,
})
export class CartItemComponent {
  cartService = inject(CartService);

  cartItem = input.required<Product>();
}
