import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookButtonComponent } from './new-book-button.component';

describe('NewBookButtonComponent', () => {
  let component: NewBookButtonComponent;
  let fixture: ComponentFixture<NewBookButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBookButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
