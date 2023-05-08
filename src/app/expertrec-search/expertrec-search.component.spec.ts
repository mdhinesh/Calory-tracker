import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertrecSearchComponent } from './expertrec-search.component';

describe('ExpertrecSearchComponent', () => {
  let component: ExpertrecSearchComponent;
  let fixture: ComponentFixture<ExpertrecSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertrecSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertrecSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
