import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerRoutingModule } from './dealer-routing';
import { DealerDashboardComponent } from './pages/dealer-dashboard.component';

const declarations = [DealerDashboardComponent];

@NgModule({
  declarations,
  imports: [CommonModule, DealerRoutingModule],
})
export class DealerModule {}
