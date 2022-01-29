import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerebralPalsyComponent } from './cerebral-palsy.component';

describe('CerebralPalsyComponent', () => {
  let component: CerebralPalsyComponent;
  let fixture: ComponentFixture<CerebralPalsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerebralPalsyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerebralPalsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
