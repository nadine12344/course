import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogePhotoComponent } from './dialoge-photo.component';

describe('DialogePhotoComponent', () => {
  let component: DialogePhotoComponent;
  let fixture: ComponentFixture<DialogePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogePhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
