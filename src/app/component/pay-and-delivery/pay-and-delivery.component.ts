import { Component, input } from '@angular/core';
import { NameSectionComponent } from '../name-section/name-section.component';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-pay-and-delivery',
  standalone: true,
  imports: [NameSectionComponent, IconsComponent],
  templateUrl: './pay-and-delivery.component.html',
  styleUrl: './pay-and-delivery.component.sass',
})
export class PayAndDeliveryComponent {
  phoneNumber = input<string>();

  payMethods = [
    {
      name: 'gotówka',
      icon: 'svg/cashIcon.svg',
    },
    {
      name: 'przelew na konto',
      icon: 'svg/bankIcon.svg',
    },
    {
      name: 'blik',
      icon: 'svg/blikIcon.svg',
    },
  ];
}
