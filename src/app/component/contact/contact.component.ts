import { Component } from '@angular/core';
import { NameSectionComponent } from '../name-section/name-section.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NameSectionComponent, IconsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass',
})
export class ContactComponent {
  dataElement = [
    {
      name: 'address',
      firstLine: 'ul. Palisadowa 43',
      secondLine: '01-938 Warszawa',
      icon: 'svg/compasIcon.svg',
    },
    {
      name: 'phone',
      firstLine: '+48 502 854 612',
      secondLine: 'Katarzyna Fonder',
      icon: 'svg/phoneIcon.svg',
    },
    {
      name: 'email',
      firstLine: 'kontakt@milaflorystyka.pl',
      icon: 'svg/emailIcon.svg',
    },
  ];
}
