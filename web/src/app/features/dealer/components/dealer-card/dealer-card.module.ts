import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DealerCardComponent } from './dealer-card.component';

@NgModule({
  imports: [MatCardModule],
  exports: [DealerCardComponent],
  declarations: [DealerCardComponent],
  providers: [],
})
export class DealerCardModule {}
