import { NgModule } from '@angular/core';
import { DealerListComponent } from './dealer-list.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatListModule],
  exports: [DealerListComponent],
  declarations: [DealerListComponent],
  providers: [],
})
export class DealerListModule {}
