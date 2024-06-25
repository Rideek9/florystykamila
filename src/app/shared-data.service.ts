import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private phoneNumber!: string;
  private likeItems = new BehaviorSubject<any[]>([]);
  items$ = this.likeItems.asObservable();

  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setLikeItems(items: any[]) {
    this.likeItems.next(items);
  }

  getLikeItems(): any[] {
    return this.likeItems.getValue();
  }

  addLikeItems(item: string) {
    const items = this.getLikeItems();
    items.push(item);
    this.likeItems.next(items);
  }

  removeLikeItems(item: string) {
    const index = this.getLikeItems().indexOf(item);
    const items = this.getLikeItems();
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
      this.likeItems.next(items);
    }
  }
}
