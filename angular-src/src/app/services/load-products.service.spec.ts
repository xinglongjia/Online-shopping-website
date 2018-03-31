import { TestBed, inject } from '@angular/core/testing';

import { LoadProductsService } from './load-products.service';

describe('LoadProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadProductsService]
    });
  });

  it('should be created', inject([LoadProductsService], (service: LoadProductsService) => {
    expect(service).toBeTruthy();
  }));
});
