import { TestBed } from '@angular/core/testing';

import { ConsultaAPI } from './consulta-api';

describe('ConsultaAPI', () => {
  let service: ConsultaAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
