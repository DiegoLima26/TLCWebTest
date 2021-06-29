import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralPComponent } from './menu-lateral-p.component';

describe('MenuLateralPComponent', () => {
  let component: MenuLateralPComponent;
  let fixture: ComponentFixture<MenuLateralPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLateralPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLateralPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
