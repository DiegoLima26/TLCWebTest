import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavegacionComponent } from './tab-navegacion.component';

describe('TabNavegacionComponent', () => {
  let component: TabNavegacionComponent;
  let fixture: ComponentFixture<TabNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNavegacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
