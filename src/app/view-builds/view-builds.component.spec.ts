import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuildsComponent } from './view-builds.component';

describe('ViewBuildsComponent', () => {
  let component: ViewBuildsComponent;
  let fixture: ComponentFixture<ViewBuildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuildsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
