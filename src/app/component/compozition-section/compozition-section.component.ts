import { Component } from '@angular/core';
import { NameSectionComponent } from '../name-section/name-section.component';
import { NgClass } from '@angular/common';
import { MainbuttonComponent } from '../buttons/mainbutton/mainbutton.component';

@Component({
  selector: 'app-compozition-section',
  standalone: true,
  imports: [NameSectionComponent, NgClass, MainbuttonComponent],
  templateUrl: './compozition-section.component.html',
  styleUrl: './compozition-section.component.sass',
})
export class CompozitionSectionComponent {
  photosGroup = [
    {
      grup: 'Wieniec',
      code: 'WIE-002',
    },
    {
      grup: 'Wieniec',
      code: 'WIE-013',
    },
    {
      grup: 'Wieniec',
      code: 'WIE-052',
    },
    {
      grup: 'Półwieniec',
      code: 'WPO-006',
    },
    {
      grup: 'Wiązanka',
      code: 'WIA-010',
    },
    {
      grup: 'Wieniec',
      code: 'WIE-071',
    },
    {
      grup: 'Łezka',
      code: 'LEZ-005',
    },
    {
      grup: 'Wieniec',
      code: 'WIE-048',
    },
  ];
}
