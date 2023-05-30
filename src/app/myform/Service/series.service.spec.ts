import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Series test: ', ()=> {
    let x = 3;
    let y = 10;
    let res = service.getTab(3, 10);

    expect(res).toBe(service.getTab(3, 10));
  })

});
