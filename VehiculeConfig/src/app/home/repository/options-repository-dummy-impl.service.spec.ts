import { TestBed } from '@angular/core/testing';

import { OptionsRepositoryDummyImplService } from './options-repository-dummy-impl.service';

describe('OptionsRepositoryDummyImplService', () => {
  let service: OptionsRepositoryDummyImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsRepositoryDummyImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
