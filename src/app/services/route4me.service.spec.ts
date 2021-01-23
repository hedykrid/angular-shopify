import { TestBed } from '@angular/core/testing';

import { Route4meService } from './route4me.service';

describe('Route4meService', () => {
  let service: Route4meService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Route4meService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
