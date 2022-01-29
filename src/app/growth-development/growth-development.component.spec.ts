import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthDevelopmentComponent } from './growth-development.component';

describe('GrowthDevelopmentComponent', () => {
  let component: GrowthDevelopmentComponent;
  let fixture: ComponentFixture<GrowthDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
