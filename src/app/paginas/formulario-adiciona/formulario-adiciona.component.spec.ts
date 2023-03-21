import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAdicionaComponent } from './formulario-adiciona.component';

describe('FormularioAdicionaComponent', () => {
  let component: FormularioAdicionaComponent;
  let fixture: ComponentFixture<FormularioAdicionaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAdicionaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAdicionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
