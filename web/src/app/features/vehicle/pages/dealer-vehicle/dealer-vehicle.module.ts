import { NgModule } from '@angular/core';
import { VehicleDetailModule } from '../../components/vehicle-deatil/vehicle-detail.module';

import { DealerVehicleComponent } from './dealer-vehicle.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [VehicleDetailModule, MatListModule],
  exports: [DealerVehicleComponent],
  declarations: [DealerVehicleComponent],
})
export class DealerVehicleModule {}
