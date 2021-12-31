import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraBodaComponent } from './nuestra-boda.component';

describe('NuestraBodaComponent', () => {
  let component: NuestraBodaComponent;
  let fixture: ComponentFixture<NuestraBodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraBodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraBodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
