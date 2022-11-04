import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { libraryModule } from '../../library.module';
import { NewBookSheetComponent } from '../new-book-sheet/new-book-sheet.component';
import { NewBookButtonComponent } from './new-book-button.component';

describe('NewBookButtonComponent', () => {
  let component: NewBookButtonComponent;
  let fixture: ComponentFixture<NewBookButtonComponent>;
  let mockBottomSheet = { open: jasmine.createSpy('open') };
  
  beforeEach(async () => {
  mockBottomSheet = { open: jasmine.createSpy('open') };

  TestBed.configureTestingModule({
    declarations: [
      NewBookButtonComponent,
      NewBookSheetComponent
    ],
    imports: [
      libraryModule
    ],
    providers: [
      { provide: MatBottomSheet, useValue: mockBottomSheet }
    ],
    })
    .overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [NewBookSheetComponent] } })
    .compileComponents();
    fixture = TestBed.createComponent(NewBookButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Should call our bottom sheet display method on button press', () => {
    const theSpy = spyOn(component, 'openBookSheet');
    const svgButton = document.getElementById('newBookButton');
    const mouseEvent = new MouseEvent('click');
    svgButton?.dispatchEvent(mouseEvent);
    fixture.detectChanges();
    expect(theSpy).toHaveBeenCalled();
  });
});
