import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSlabComponent } from './tax-slab.component';

describe('TaxSlabComponent', () => {
  let component: TaxSlabComponent;
  let fixture: ComponentFixture<TaxSlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxSlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxSlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
