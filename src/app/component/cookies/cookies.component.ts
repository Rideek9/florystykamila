import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.sass',
})
export class CookiesComponent implements OnInit {
  cookieExists: boolean = false;
  hiddenCookie: boolean = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.checkCookie();
    if (this.cookieService.get('noAccept')) {
      this.deleteCookies();
      this.hiddenCookie = true;
      return;
    }
    if (this.cookieService.get('acceptToken')) {
      this.hiddenCookie = true;

      return;
    }
  }

  closePopUp(): void {}

  setCookie() {
    this.cookieService.set('acceptToken', 'userAcceptCookies', 7);
    this.cookieExists = true;
    this.hiddenCookie = true;
  }

  checkCookie() {
    if (this.cookieService.get('acceptToken')) {
      this.cookieExists = true;
    }
  }

  deleteCookies() {
    this.cookieService.deleteAll();
    this.cookieExists = false;
    this.cookieService.set('noAccept', 'noAcceptCookies', 1);
    this.hiddenCookie = true;
  }
}
