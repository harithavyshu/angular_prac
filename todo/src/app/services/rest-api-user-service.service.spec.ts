import { TestBed } from '@angular/core/testing';

import { RestApiUserServiceService } from './rest-api-user-service.service';

describe('RestApiUserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiUserServiceService = TestBed.get(RestApiUserServiceService);
    expect(service).toBeTruthy();
  });
});
