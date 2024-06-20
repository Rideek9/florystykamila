import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { VideoSecitonComponent } from './component/video-seciton/video-seciton.component';
import { YouHaveSectionComponent } from './component/you-have-section/you-have-section.component';
import { CompozitionSectionComponent } from './component/compozition-section/compozition-section.component';
import { filter } from 'rxjs';
import { AnalyticsService } from './analytics.service';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  constructor(
    private router: Router,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.analyticsService.sendEvent(
          'page_view',
          'Navigation',
          event.urlAfterRedirects
        );
      });
  }
}
