import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllBooksComponent } from './display-all-books.component';

describe('DisplayAllBooksComponent', () => {
  let component: DisplayAllBooksComponent;
  let fixture: ComponentFixture<DisplayAllBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAllBooksComponent]
    });
    fixture = TestBed.createComponent(DisplayAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
