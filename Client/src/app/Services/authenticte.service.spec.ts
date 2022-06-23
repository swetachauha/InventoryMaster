import { TestBed } from '@angular/core/testing';

import { AuthenticteService } from './authenticte.service';

describe('AuthenticteService', () => {
  let service: AuthenticteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
