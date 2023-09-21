import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHomePageComponent } from './site-home-page.component';

describe('SiteHomePageComponent', () => {
  let component: SiteHomePageComponent;
  let fixture: ComponentFixture<SiteHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteHomePageComponent]
    });
    fixture = TestBed.createComponent(SiteHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
