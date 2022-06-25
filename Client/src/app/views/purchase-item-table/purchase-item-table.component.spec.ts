import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseItemTableComponent } from './purchase-item-table.component';

describe('PurchaseItemTableComponent', () => {
  let component: PurchaseItemTableComponent;
  let fixture: ComponentFixture<PurchaseItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseItemTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
