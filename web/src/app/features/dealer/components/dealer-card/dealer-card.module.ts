import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DealerCardComponent } from './dealer-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatCardModule, MatButtonModule],
  exports: [DealerCardComponent],
  declarations: [DealerCardComponent],
  providers: [],
})
export class DealerCardModule {}
