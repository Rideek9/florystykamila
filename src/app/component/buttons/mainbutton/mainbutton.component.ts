import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mainbutton',
  standalone: true,
  imports: [],
  templateUrl: './mainbutton.component.html',
  styleUrl: './mainbutton.component.sass',
})
export class MainbuttonComponent {
  nameButton = input<string>();
  hashUrlAdresButton = input<string>();
}
