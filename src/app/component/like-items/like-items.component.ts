import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-like-items',
  standalone: true,
  imports: [],
  templateUrl: './like-items.component.html',
  styleUrl: './like-items.component.sass',
})
export class LikeItemsComponent {
  localElement: string[] = [];

  ngOnInit(): void {
    this.getStorage();
  }

  getStorage() {
    this.localElement = Object.keys(localStorage);
  }
}
