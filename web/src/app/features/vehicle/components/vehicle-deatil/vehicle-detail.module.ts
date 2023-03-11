import { NgModule } from '@angular/core';

import { VehicleDeatilComponent } from './vehicle-deatil.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatCardModule],
  exports: [VehicleDeatilComponent],
  declarations: [VehicleDeatilComponent],
  providers: [],
})
export class VehicleDetailModule {}
