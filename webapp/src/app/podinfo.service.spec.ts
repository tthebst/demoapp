import { TestBed } from '@angular/core/testing';

import { PodinfoService } from './podinfo.service';

describe('PodinfoService', () => {
  let service: PodinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
