import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalasProductComponent } from './malas-product.component';

describe('MalasProductComponent', () => {
  let component: MalasProductComponent;
  let fixture: ComponentFixture<MalasProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalasProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalasProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
