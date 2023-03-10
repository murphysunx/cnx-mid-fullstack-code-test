import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Dealer } from '../../models/dealer.model';

@Component({
  selector: 'app-dealer-card',
  templateUrl: './dealer-card.component.html',
  styleUrls: ['./dealer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DealerCardComponent {
  @Input() dealer!: Dealer;
}
