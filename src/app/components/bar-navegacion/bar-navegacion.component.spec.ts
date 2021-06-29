import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavegacionComponent } from './bar-navegacion.component';

describe('BarNavegacionComponent', () => {
  let component: BarNavegacionComponent;
  let fixture: ComponentFixture<BarNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarNavegacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
