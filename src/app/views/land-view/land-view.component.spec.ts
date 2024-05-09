import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandViewComponent } from './land-view.component';

describe('LandViewComponent', () => {
  let component: LandViewComponent;
  let fixture: ComponentFixture<LandViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
