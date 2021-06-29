import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialSingInComponent } from './dial-sing-in.component';

describe('DialSingInComponent', () => {
  let component: DialSingInComponent;
  let fixture: ComponentFixture<DialSingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialSingInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialSingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
