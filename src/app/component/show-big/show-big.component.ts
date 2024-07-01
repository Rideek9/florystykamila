import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-big',
  standalone: true,
  imports: [],
  templateUrl: './show-big.component.html',
  styleUrl: './show-big.component.sass',
})
export class ShowBigComponent {
  @Input() data: any;

  photoScale: boolean = false;

  scalePhoto() {
    this.photoScale = !this.photoScale;
  }
}
