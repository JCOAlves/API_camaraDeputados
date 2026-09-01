import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoId } from './produto-id';

describe('ProdutoId', () => {
  let component: ProdutoId;
  let fixture: ComponentFixture<ProdutoId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoId],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoId);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
