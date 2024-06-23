import { Component } from '@angular/core';
import { CatalogElementsComponent } from '../../component/catalog-elements/catalog-elements.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogElementsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.sass',
})
export class CatalogComponent {}
