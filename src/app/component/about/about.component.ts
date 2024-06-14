import { Component } from '@angular/core';
import { NameSectionComponent } from '../name-section/name-section.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NameSectionComponent, IconsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass',
})
export class AboutComponent {
  informationComponents = [
    {
      title: 'Zaufanie wielu klientów',
      descryption:
        'Od lat współpracujemy z zakładami pogrzebowymi oraz instytucjami państwowymi,' +
        ' którzy zaufali nam w każdym detalu',
      path: 'handsIcon.svg',
    },
    {
      title: 'Wieloletnie doświadczenie',
      descryption:
        'Nasze doświadczenie w wyrobie kompozycji pogrzebowych sięga 2004 roku. Od 20' +
        ' lat tworzymy produkty, które wyróżniają się na ceremoniach pogrzebowych.',
      path: 'infinityIcon.svg',
    },
    {
      title: 'Zamówienie',
      descryption:
        'Wszystkie nasze wyroby są wytwarzane wyłącznie na zamówienie po uprzednim zamówieniu telefonicznym.',
      path: 'phoneIcon.svg',
    },
    {
      title: 'Klient jest najważniejszy',
      descryption:
        'Jesteśmy przekonani, że każde pożegnanie zasługuje na godne upamiętnienie. W' +
        ' naszej pracowni oddajemy hołd nie tylko przez piękno kwiatów, ale również' +
        ' przez indywidualne zaangażowanie i wrażliwość. ',
      path: 'personIcon.svg',
    },
    {
      title: 'Elastyczne dostawy',
      descryption:
        'Dostawy naszych wyrobów, realizujemy na terenie Warszawy i okolic.',
      path: 'truckIcon.svg',
    },
    {
      title: 'Indywidualne zamówienia',
      descryption:
        'Tworzymy nie tylko wieńce i wiązanki pogrzebowe, ale również' +
        ' dostosowane indywidualne aranżacje spełniające unikalne wymagania klienta',
      path: 'noteIcon.svg',
    },
  ];
}
