import { TestBed } from '@angular/core/testing';

import { BellService } from './bell.service';

describe('BellService', () => {
  let service: BellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
