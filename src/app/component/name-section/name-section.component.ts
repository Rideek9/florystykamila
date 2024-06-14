import { Component, input } from '@angular/core';

@Component({
  selector: 'app-name-section',
  standalone: true,
  imports: [],
  templateUrl: './name-section.component.html',
  styleUrl: './name-section.component.sass',
})
export class NameSectionComponent {
  nameSection = input<string>();
}
