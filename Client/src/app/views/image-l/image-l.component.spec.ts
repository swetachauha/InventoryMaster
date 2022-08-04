import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLComponent } from './image-l.component';

describe('ImageLComponent', () => {
  let component: ImageLComponent;
  let fixture: ComponentFixture<ImageLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
