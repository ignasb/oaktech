import { TestBed } from '@angular/core/testing';

import { OtMaterialDesignSystemService } from './ot-material-design-system.service';

describe('OtMaterialDesignSystemService', () => {
  let service: OtMaterialDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtMaterialDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
