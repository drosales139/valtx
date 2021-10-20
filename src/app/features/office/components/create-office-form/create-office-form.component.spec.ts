import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfficeFormComponent } from './create-office-form.component';

describe('CreateOfficeFormComponent', () => {
  let component: CreateOfficeFormComponent;
  let fixture: ComponentFixture<CreateOfficeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOfficeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOfficeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
