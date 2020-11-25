import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonMaltusAboutComponent } from './don-maltus-about.component';

describe('DonMaltusAboutComponent', () => {
  let component: DonMaltusAboutComponent;
  let fixture: ComponentFixture<DonMaltusAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonMaltusAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonMaltusAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
