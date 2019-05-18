import { TestBed } from '@angular/core/testing';

import { UsersResolverService } from './users-resolver.service';

describe('UsersResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersResolverService = TestBed.get(UsersResolverService);
    expect(service).toBeTruthy();
  });
});
