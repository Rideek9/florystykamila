import { Component } from '@angular/core';
import { CatalogElementsComponent } from '../../component/catalog-elements/catalog-elements.component';
import { CookieManagmentService } from '../../cookie-managment.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogElementsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.sass',
})
export class CatalogComponent {
  constructor(private cookieManagmentService: CookieManagmentService) {
    this.cookieManagmentService.clearCookiesIfOffAccesParent();
  }
}
