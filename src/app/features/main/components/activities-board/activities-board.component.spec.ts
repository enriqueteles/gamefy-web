import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesBoardComponent } from './activities-board.component';

describe('ActivitiesBoardComponent', () => {
  let component: ActivitiesBoardComponent;
  let fixture: ComponentFixture<ActivitiesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
