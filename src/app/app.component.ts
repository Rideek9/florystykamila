import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { VideoSecitonComponent } from './component/video-seciton/video-seciton.component';
import { YouHaveSectionComponent } from './component/you-have-section/you-have-section.component';
import { CompozitionSectionComponent } from './component/compozition-section/compozition-section.component';

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
export class AppComponent {}
