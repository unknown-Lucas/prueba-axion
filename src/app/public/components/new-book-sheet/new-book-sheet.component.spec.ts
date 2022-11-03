import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookSheetComponent } from './new-book-sheet.component';

describe('NewBookSheetComponent', () => {
  let component: NewBookSheetComponent;
  let fixture: ComponentFixture<NewBookSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBookSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
