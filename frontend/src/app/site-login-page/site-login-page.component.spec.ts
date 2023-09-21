import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLoginPageComponent } from './site-login-page.component';

describe('SiteLoginPageComponent', () => {
  let component: SiteLoginPageComponent;
  let fixture: ComponentFixture<SiteLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteLoginPageComponent]
    });
    fixture = TestBed.createComponent(SiteLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
