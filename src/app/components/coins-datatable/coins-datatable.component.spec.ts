import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsDatatableComponent } from './coins-datatable.component';

describe('CoinsDatatableComponent', () => {
  let component: CoinsDatatableComponent;
  let fixture: ComponentFixture<CoinsDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinsDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
