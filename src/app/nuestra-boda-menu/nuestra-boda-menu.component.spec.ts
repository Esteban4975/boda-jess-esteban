import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraBodaMenuComponent } from './nuestra-boda-menu.component';

describe('NuestraBodaMenuComponent', () => {
  let component: NuestraBodaMenuComponent;
  let fixture: ComponentFixture<NuestraBodaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraBodaMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraBodaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
