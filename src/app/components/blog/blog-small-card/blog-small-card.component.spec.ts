import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSmallCardComponent } from './blog-small-card.component';

describe('BlogSmallCardComponent', () => {
  let component: BlogSmallCardComponent;
  let fixture: ComponentFixture<BlogSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSmallCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
