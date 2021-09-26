import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompComponent } from './allcomp.component';

describe('AllcompComponent', () => {
  let component: AllcompComponent;
  let fixture: ComponentFixture<AllcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
