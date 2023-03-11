import { Component, OnInit } from '@angular/core';
import { DealerService } from '../../services/dealer.service';

@Component({
  selector: 'app-dealer-dashboard',
  templateUrl: './dealer-dashboard.component.html',
  styleUrls: ['./dealer-dashboard.component.scss'],
})
export class DealerDashboardComponent implements OnInit {
  constructor(private dealerService: DealerService) {}

  ngOnInit(): void {
    this.dealerService.fetchAllDealers().subscribe((dealers) => {
      console.log('dealers', dealers);
    });
  }
}
