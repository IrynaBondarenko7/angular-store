import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      class="bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md opacity-100 hover:opacity-90 transition-all duration-300"
      (click)="handleButtonClick()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();

  handleButtonClick() {
    this.btnClicked.emit();
  }
}
