import { TestBed, inject } from '@angular/core/testing';

import { AntiHeroesService } from './anti-heroes.service';

describe('AntiHeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntiHeroesService]
    });
  });

  it('should be created', inject([AntiHeroesService], (service: AntiHeroesService) => {
    expect(service).toBeTruthy();
  }));
});
