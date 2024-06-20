import { Component, input } from '@angular/core';
import { MainbuttonComponent } from '../buttons/mainbutton/mainbutton.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainbuttonComponent, IconsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  listPath = [
    { name: 'o nas', urlAdres: 'about', active: true },
    { name: 'dostawa i płatność', urlAdres: 'payAndDelvery', active: true },
    { name: 'katalog', urlAdres: 'catalog', active: false },
    { name: 'kontakt', urlAdres: 'contact', active: true },
  ];

  imagePath = 'img/headerImageFirst.webp';

  //content to heder descyptrion
  tekstHeader = ['Kompozycje, które mówią więcej niż słowa'];
  numberRandom = Math.floor(Math.random() * this.tekstHeader.length);

  activeMobileView: boolean = false;

  changeView() {
    this.activeMobileView = !this.activeMobileView;
  }
}
