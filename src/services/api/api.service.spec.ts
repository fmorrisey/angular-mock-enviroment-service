import { TestBed } from '@angular/core/testing';

import { API_ABSTRACT } from './api.abstract';

describe('ApiService', () => {
  let service: API_ABSTRACT;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(API_ABSTRACT);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
