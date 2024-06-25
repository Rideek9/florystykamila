import { Component, OnInit, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { VideoSecitonComponent } from './component/video-seciton/video-seciton.component';
import { YouHaveSectionComponent } from './component/you-have-section/you-have-section.component';
import { CompozitionSectionComponent } from './component/compozition-section/compozition-section.component';
import { PayAndDeliveryComponent } from './component/pay-and-delivery/pay-and-delivery.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { LikeItemsComponent } from './component/like-items/like-items.component';
import { HomeComponent } from './routes/home/home.component';
import { SharedDataService } from './shared-data.service';
import { CookiesComponent } from './component/cookies/cookies.component';
import { CookieManagmentService } from './cookie-managment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    VideoSecitonComponent,
    YouHaveSectionComponent,
    CompozitionSectionComponent,
    PayAndDeliveryComponent,
    ContactComponent,
    FooterComponent,
    LikeItemsComponent,
    HomeComponent,
    CookiesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  phoneNumber: string = '502854612';

  // constructor(private sharedDataService: SharedDataService) {
  //   this.sharedDataService.setPhoneNumber(this.phoneNumber);
  // }

  constructor(
    @Optional() private sharedDataService: SharedDataService,
    @Optional() private cookieManagmentService: CookieManagmentService
  ) {
    if (sharedDataService) {
      this.initialShareDataServive();
    }
    if (cookieManagmentService) {
      this.initialCookieManagmentService;
    }
  }

  ngOnInit(): void {}

  initialShareDataServive(): void {
    this.sharedDataService.setPhoneNumber(this.phoneNumber);
  }

  private initialCookieManagmentService(): void {
    this.cookieManagmentService.clearCookiesIfOffAccesParent();
  }
}
