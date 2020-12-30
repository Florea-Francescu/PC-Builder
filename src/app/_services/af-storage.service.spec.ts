import { TestBed } from '@angular/core/testing';

import { AfStorageService } from './af-storage.service';

describe('AfStorageService', () => {
  let service: AfStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
