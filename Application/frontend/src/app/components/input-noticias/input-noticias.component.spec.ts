import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNoticiasComponent } from './input-noticias.component';

describe('InputNoticiasComponent', () => {
  let component: InputNoticiasComponent;
  let fixture: ComponentFixture<InputNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
