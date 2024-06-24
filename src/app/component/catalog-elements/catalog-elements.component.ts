import { Component, OnInit } from '@angular/core';
import { NameSectionComponent } from '../name-section/name-section.component';

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

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('database/catalog.json');
    this.data = await response.json();
  }

  handleClick(item: string): void {
    if (this.likeItems.includes(item)) {
      this.likeItems.splice(this.likeItems.indexOf(item), 1);
      return;
    }
    this.likeItems.push(item);

    console.log(this.likeItems);
  }
}
