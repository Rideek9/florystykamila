import { Component } from '@angular/core';
import { NameSectionComponent } from '../name-section/name-section.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-you-have-section',
  standalone: true,
  imports: [NameSectionComponent, IconsComponent],
  templateUrl: './you-have-section.component.html',
  styleUrl: './you-have-section.component.sass',
})
export class YouHaveSectionComponent {
  listInfo = [
    {
      name: 'Profesjonalizm i doświadczenie',
    },
    {
      name: 'Indywidualne podejście',
    },
    {
      name: 'Wysokiej jakości kwiaty',
    },
    {
      name: 'Bogaty wybór wzorów',
    },
    {
      name: 'Wsparcie emocjonalne',
    },
    {
      name: 'Kreatywność i pasja',
    },
  ];
}
