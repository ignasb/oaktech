import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtInputComponent } from './ot-input.component';

describe('OtInputComponent', () => {
  let component: OtInputComponent;
  let fixture: ComponentFixture<OtInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
