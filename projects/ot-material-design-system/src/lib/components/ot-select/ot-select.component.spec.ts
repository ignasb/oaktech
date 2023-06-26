import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtSelectComponent } from './ot-select.component';

describe('OtSelectComponent', () => {
  let component: OtSelectComponent;
  let fixture: ComponentFixture<OtSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
