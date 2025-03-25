import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <header
      class="ng-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <span class="text-xl">Store</span>
      <app-primary-button label="Cart" (btnClicked)="showButtonClicked()" />
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  showButtonClicked() {
    console.log('click');
  }
}
