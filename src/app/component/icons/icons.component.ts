import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.sass'
})
export class IconsComponent {
  name = input<string>()
  nameClass = input<string>()
}
