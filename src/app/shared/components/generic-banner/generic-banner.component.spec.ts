import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBannerComponent } from './generic-banner.component';

describe('GenericBannerComponent', () => {
  let component: GenericBannerComponent;
  let fixture: ComponentFixture<GenericBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
