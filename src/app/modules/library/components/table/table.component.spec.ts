import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Observable } from 'rxjs';
import { libraryModule } from '../../library.module';
import { NewBookSheetComponent } from '../new-book-sheet/new-book-sheet.component';
import { TableComponent } from './table.component';

describe('tableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        NewBookSheetComponent
      ],
      imports: [
        libraryModule
      ],
      providers: [
        { provide: MatBottomSheet }
      ],
    })
      .overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [NewBookSheetComponent] } })
      .compileComponents();
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('table exist', () =>{
    expect(component).toBeTruthy()
  })

  it('Should call our bottom sheet display method on row press', () => {
    const theSpy = spyOn(component, 'editBook');
    component.tableData$ = new Observable((res) => res.next([{'id':0,'author':'test','title':'test','editorial':'tes'}]))
    fixture.detectChanges();
    const bookrow = document.getElementById('bookRow');
    const mouseEvent = new MouseEvent('click');
    bookrow?.dispatchEvent(mouseEvent);
    fixture.detectChanges();
    expect(theSpy).toHaveBeenCalled();
  });
})
