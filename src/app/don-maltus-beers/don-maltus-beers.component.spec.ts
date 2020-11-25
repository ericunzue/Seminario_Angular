import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonMaltusBeersComponent } from './don-maltus-beers.component';

describe('DonMaltusBeersComponent', () => {
  let component: DonMaltusBeersComponent;
  let fixture: ComponentFixture<DonMaltusBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonMaltusBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonMaltusBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
