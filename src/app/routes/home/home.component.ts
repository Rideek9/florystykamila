import { Component, Input, input, OnInit } from '@angular/core';
import { AboutComponent } from '../../component/about/about.component';
import { CompozitionSectionComponent } from '../../component/compozition-section/compozition-section.component';
import { ContactComponent } from '../../component/contact/contact.component';
import { PayAndDeliveryComponent } from '../../component/pay-and-delivery/pay-and-delivery.component';
import { VideoSecitonComponent } from '../../component/video-seciton/video-seciton.component';
import { YouHaveSectionComponent } from '../../component/you-have-section/you-have-section.component';
import { SharedDataService } from '../../shared-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    CompozitionSectionComponent,
    ContactComponent,
    PayAndDeliveryComponent,
    VideoSecitonComponent,
    YouHaveSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements OnInit {
  phoneNumber!: string;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.phoneNumber = this.sharedDataService.getPhoneNumber();
  }
}
