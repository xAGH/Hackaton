import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosEmergenciaComponent } from './numeros-emergencia.component';

describe('NumerosEmergenciaComponent', () => {
  let component: NumerosEmergenciaComponent;
  let fixture: ComponentFixture<NumerosEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosEmergenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
