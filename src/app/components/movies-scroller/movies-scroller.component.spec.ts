import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesScrollerComponent } from './movies-scroller.component';

describe('MoviesScrollerComponent', () => {
  let component: MoviesScrollerComponent;
  let fixture: ComponentFixture<MoviesScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesScrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
