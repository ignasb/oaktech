import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtMaterialDesignSystemComponent } from './ot-material-design-system.component';

describe('OtMaterialDesignSystemComponent', () => {
  let component: OtMaterialDesignSystemComponent;
  let fixture: ComponentFixture<OtMaterialDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtMaterialDesignSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtMaterialDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
