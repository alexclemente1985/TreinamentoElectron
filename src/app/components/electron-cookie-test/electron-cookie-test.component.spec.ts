import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronCookieTestComponent } from './electron-cookie-test.component';

describe('ElectronCookieTestComponent', () => {
  let component: ElectronCookieTestComponent;
  let fixture: ComponentFixture<ElectronCookieTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronCookieTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronCookieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
