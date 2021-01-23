import { TestBed } from '@angular/core/testing';

import { ShopifyAdminService } from './shopify-admin.service';

describe('ShopifyAdminService', () => {
  let service: ShopifyAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopifyAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
