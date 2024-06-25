import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CookieManagmentService {
  constructor(private cookieService: CookieService) {}

  clearCookiesIfOffAccesParent(): void {
    const offAccess = this.cookieService.get('noAccept');
    if (offAccess) {
      const allCookies = this.cookieService.getAll();
      for (const cookie in allCookies) {
        if (cookie !== 'noAccept') {
          this.cookieService.delete(cookie);
        }
      }
    }
  }
}
