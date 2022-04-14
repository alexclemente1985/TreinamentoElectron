import { TestBed } from '@angular/core/testing';

import { ElectronIpcTestService } from './electron-ipc-test.service';

describe('ElectronIpcTestService', () => {
  let service: ElectronIpcTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronIpcTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
