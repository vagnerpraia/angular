import { TestBed, inject } from '@angular/core/testing';

import { BasesService } from './bases.service';

describe('BasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasesService]
    });
  });

  it('should be created', inject([BasesService], (service: BasesService) => {
    expect(service).toBeTruthy();
  }));
});
