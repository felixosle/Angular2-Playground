import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contenido1Component } from './contenido1.component';

describe('Contenido1Component', () => {
  let component: Contenido1Component;
  let fixture: ComponentFixture<Contenido1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contenido1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contenido1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
