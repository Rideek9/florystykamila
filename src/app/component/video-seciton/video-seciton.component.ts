import { Component } from '@angular/core';
import { MainbuttonComponent } from '../buttons/mainbutton/mainbutton.component';

@Component({
  selector: 'app-video-seciton',
  standalone: true,
  imports: [MainbuttonComponent],
  templateUrl: './video-seciton.component.html',
  styleUrl: './video-seciton.component.sass',
})
export class VideoSecitonComponent {
  descryptionContent = [
    {
      title: 'Wyrazimy Twoje uczucia w najpiękniejszy sposób.',
    },
    {
      title: 'Kwiatowa harmonia dla pożegnań.',
    },
    {
      title: 'Kwiaty, które otulają wspomnienia',
    },
  ];

  randomNumber = Math.floor(Math.random() * this.descryptionContent.length);

  ngAfterViewInit() {
    const video: HTMLVideoElement = document.getElementById(
      'backround-video'
    ) as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.playsInline = true;
      video.play().catch((err) => {
        console.error('Error vider', err);
      });
    }
  }
}
