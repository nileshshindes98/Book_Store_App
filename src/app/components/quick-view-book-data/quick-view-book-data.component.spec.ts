import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewBookDataComponent } from './quick-view-book-data.component';

describe('QuickViewBookDataComponent', () => {
  let component: QuickViewBookDataComponent;
  let fixture: ComponentFixture<QuickViewBookDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickViewBookDataComponent]
    });
    fixture = TestBed.createComponent(QuickViewBookDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
