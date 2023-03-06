import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletconnComponent } from './walletconn.component';

describe('WalletconnComponent', () => {
  let component: WalletconnComponent;
  let fixture: ComponentFixture<WalletconnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletconnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletconnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
