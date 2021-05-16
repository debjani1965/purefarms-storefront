import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyComboComponent } from './weekly-combo.component';

describe('WeeklyComboComponent', () => {
  let component: WeeklyComboComponent;
  let fixture: ComponentFixture<WeeklyComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyComboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
