import { TestBed } from '@angular/core/testing';

import { LivroServiceService } from './livro-service.service';

describe('LivroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivroServiceService = TestBed.get(LivroServiceService);
    expect(service).toBeTruthy();
  });
});
