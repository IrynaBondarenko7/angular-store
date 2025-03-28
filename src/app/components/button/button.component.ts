import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class="text-black w-full px-5 py-2 rounded-xl shadow-md opacity-100 hover:bg-slate-200 transition-all duration-300"
      (click)="btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input('');

  btnClicked = output();
}
