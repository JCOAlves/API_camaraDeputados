import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDeputados } from './busca-deputados';

describe('BuscaDeputados', () => {
  let component: BuscaDeputados;
  let fixture: ComponentFixture<BuscaDeputados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaDeputados],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscaDeputados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
