import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBuildsComponent } from './my-builds.component';

describe('MyBuildsComponent', () => {
  let component: MyBuildsComponent;
  let fixture: ComponentFixture<MyBuildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBuildsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
