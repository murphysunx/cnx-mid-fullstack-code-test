import { NgModule } from '@angular/core';
import { DealerListComponent } from './dealer-list.component';
import { MatListModule } from '@angular/material/list';
import { DealerCardModule } from '../dealer-card/dealer-card.module';

@NgModule({
  imports: [MatListModule, DealerCardModule],
  exports: [DealerListComponent],
  declarations: [DealerListComponent],
  providers: [],
})
export class DealerListModule {}
