import { TestBed } from '@angular/core/testing';

import { CookieManagmentService } from './cookie-managment.service';

describe('CookieManagmentService', () => {
  let service: CookieManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
