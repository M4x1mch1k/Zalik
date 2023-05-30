import { TestBed } from '@angular/core/testing';

import { ValidateInitialNumberService } from './validate-initial-number.service';

describe('ValidateInitialNumberService', () => {
  let service: ValidateInitialNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateInitialNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Initial number should be in limit: ', () => {
    let value = 5;
    let limit = 10;
    let res = service.validate_init_number(value, limit);

    expect(res).toBe(true)
  })

  fit('Initial number should not be in limit: ', () => {
    let value = 11;
    let limit = 10;
    let res = service.validate_init_number(value, limit);

    expect(res).toBe(false)
  })

});
