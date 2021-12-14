import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosDesastreComponent } from './numeros-desastre.component';

describe('NumerosDesastreComponent', () => {
  let component: NumerosDesastreComponent;
  let fixture: ComponentFixture<NumerosDesastreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosDesastreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosDesastreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
