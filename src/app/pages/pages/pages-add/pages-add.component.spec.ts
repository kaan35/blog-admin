import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAddComponent } from './pages-add.component';

describe('PagesAddComponent', () => {
  let component: PagesAddComponent;
  let fixture: ComponentFixture<PagesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
