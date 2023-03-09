import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerVehicleComponent } from './dealer-vehicle.component';

describe('DealerVehicleComponent', () => {
  let component: DealerVehicleComponent;
  let fixture: ComponentFixture<DealerVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealerVehicleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DealerVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
