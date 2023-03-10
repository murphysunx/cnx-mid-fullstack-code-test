import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-dealer-vehicle',
  templateUrl: './dealer-vehicle.component.html',
  styleUrls: ['./dealer-vehicle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealerVehicleComponent {
  bac!: string;
  vehicles?: Vehicle[];

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) {}
}
