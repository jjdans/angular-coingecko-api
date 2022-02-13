import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormDatatableCoinComponent } from './search-form-datatable-coin.component';

describe('SearchFormDatatableCoinComponent', () => {
  let component: SearchFormDatatableCoinComponent;
  let fixture: ComponentFixture<SearchFormDatatableCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormDatatableCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormDatatableCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
