import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTest1Component } from './prod-test1.component';

describe('ProdTest1Component', () => {
  let component: ProdTest1Component;
  let fixture: ComponentFixture<ProdTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdTest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
