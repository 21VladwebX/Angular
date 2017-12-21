import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDataAntiHeroesService } from './in-memory-data-anti-heroes.service';

describe('InMemoryDataAntiHeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDataAntiHeroesService]
    });
  });

  it('should be created', inject([InMemoryDataAntiHeroesService], (service: InMemoryDataAntiHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
