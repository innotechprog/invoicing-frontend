import { TestBed } from '@angular/core/testing';

import { EncryptionHandlerService } from './encryption-handler.service';

describe('EncryptionHandlerService', () => {
  let service: EncryptionHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptionHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
