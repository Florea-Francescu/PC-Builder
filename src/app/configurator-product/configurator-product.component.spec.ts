import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorProductComponent } from './configurator-product.component';

describe('ConfiguratorProductComponent', () => {
  let component: ConfiguratorProductComponent;
  let fixture: ComponentFixture<ConfiguratorProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguratorProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguratorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
