import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedDataService } from '../../shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-like-items',
  standalone: true,
  imports: [],
  templateUrl: './like-items.component.html',
  styleUrl: './like-items.component.sass',
})
export class LikeItemsComponent implements OnInit {
  localElement: any[] = [];
  numberOf: number = 0;
  private itemLength!: Subscription;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.itemLength = this.sharedDataService.items$.subscribe((items) => {
      this.numberOf = items.length;
    });
    if (this.localElement.length === 0) {
      this.localElement = Object.keys(localStorage);
      this.sharedDataService.setLikeItems(this.localElement);
      this.numberOf = this.localElement.length;
      return;
    }
  }
}
