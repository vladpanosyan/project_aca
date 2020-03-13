import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalStatisticComponent } from './portal-statistic.component';

describe('PortalStatisticComponent', () => {
  let component: PortalStatisticComponent;
  let fixture: ComponentFixture<PortalStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
