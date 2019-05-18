import { TestBed } from '@angular/core/testing';

import { SingleUserResolverService } from './single-user-resolver.service';

describe('SingleUserResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleUserResolverService = TestBed.get(SingleUserResolverService);
    expect(service).toBeTruthy();
  });
});
