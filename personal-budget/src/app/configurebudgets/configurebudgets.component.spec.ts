import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurebudgetsComponent } from './configurebudgets.component';

describe('ConfigurebudgetsComponent', () => {
  let component: ConfigurebudgetsComponent;
  let fixture: ComponentFixture<ConfigurebudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurebudgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurebudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
