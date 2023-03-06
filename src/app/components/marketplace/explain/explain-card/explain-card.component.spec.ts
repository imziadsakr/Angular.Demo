import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainCardComponent } from './explain-card.component';

describe('ExplainCardComponent', () => {
  let component: ExplainCardComponent;
  let fixture: ComponentFixture<ExplainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
