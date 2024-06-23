import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-elements',
  standalone: true,
  imports: [],
  templateUrl: './catalog-elements.component.html',
  styleUrl: './catalog-elements.component.sass',
})
export class CatalogElementsComponent implements OnInit {
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
