import { TestBed } from '@angular/core/testing';

import { JwtTokenLibService } from './jwt-token-lib.service';

describe('JwtTokenLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtTokenLibService = TestBed.get(JwtTokenLibService);
    expect(service).toBeTruthy();
  });
});
