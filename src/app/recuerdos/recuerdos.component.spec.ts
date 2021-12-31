import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuerdosComponent } from './recuerdos.component';

describe('RecuerdosComponent', () => {
  let component: RecuerdosComponent;
  let fixture: ComponentFixture<RecuerdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuerdosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuerdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
