import { Component, OnInit } from '@angular/core';
import { NameSectionComponent } from '../name-section/name-section.component';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-catalog-elements',
  standalone: true,
  imports: [NameSectionComponent],
  templateUrl: './catalog-elements.component.html',
  styleUrl: './catalog-elements.component.sass',
})
export class CatalogElementsComponent implements OnInit {
  serchElement = 'all';

  categoryElement = [
    {
      category: 'wieńce',
      codeCategory: 'Wieniec',
      active: true,
    },
    {
      category: 'wiązanki',
      codeCategory: 'Wiązanka',
      active: true,
    },
    {
      category: 'półwieńce',
      codeCategory: 'Półwieniec',
      active: true,
    },
    {
      category: 'łezki',
      codeCategory: 'Łezka',
      active: true,
    },
  ];

  data: any;
  likeItems: string[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.fetchData();
    this.getAllKeys();
  }

  async fetchData() {
    const response = await fetch('database/catalog.json');
    this.data = await response.json();
  }

  getAllKeys() {
    this.likeItems = Object.keys(localStorage);
  }

  handleClick(item: string): void {
    if (this.likeItems.includes(item)) {
      this.likeItems.splice(this.likeItems.indexOf(item), 1);
      localStorage.removeItem(item);
      this.sharedDataService.removeLikeItems(item);
      return;
    }
    this.likeItems.push(item);
    localStorage.setItem(item, JSON.stringify('active'));
    this.sharedDataService.addLikeItems(item);
  }
}
