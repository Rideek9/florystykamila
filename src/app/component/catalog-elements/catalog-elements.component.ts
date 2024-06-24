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
  categoryElement = [
    {
      category: 'wieńce',
      codeCategory: 'Wieniec',
    },
    {
      category: 'wiązanki',
      codeCategory: 'Wiązanka',
    },
    {
      category: 'półwieńce',
      codeCategory: 'Półwieniec',
    },
    {
      category: 'łezki',
      codeCategory: 'Łezka',
    },
  ];

  data: any;

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('database/catalog.json');
    this.data = await response.json();
    console.log(this.data);
  }
}
