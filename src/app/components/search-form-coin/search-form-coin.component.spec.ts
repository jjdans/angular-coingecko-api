import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormCoinComponent } from './search-form-coin.component';

describe('SearchFormCoinComponent', () => {
  let component: SearchFormCoinComponent;
  let fixture: ComponentFixture<SearchFormCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
