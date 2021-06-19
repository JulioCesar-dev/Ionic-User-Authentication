import { TestBed } from '@angular/core/testing';

import { EmbeddedService } from './embedded.service';

describe('EmbeddedService', () => {
  let service: EmbeddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbeddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
