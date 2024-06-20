import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

declare let gtag: Function;

export class AnalyticsService {
  constructor() {
  }

  sendEvent(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string,
  ) {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      event_action: eventAction,
    });
  }
}
