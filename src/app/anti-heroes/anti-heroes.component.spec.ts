import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiHeroesComponent } from './anti-heroes.component';

describe('AntiHeroesComponent', () => {
  let component: AntiHeroesComponent;
  let fixture: ComponentFixture<AntiHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
