import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPaisComponent } from './seleccion-pais.component';

describe('SeleccionPaisComponent', () => {
  let component: SeleccionPaisComponent;
  let fixture: ComponentFixture<SeleccionPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
