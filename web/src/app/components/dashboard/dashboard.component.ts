import { Component, OnInit } from '@angular/core';
import { DealerService } from 'src/app/services/dealer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dealerService: DealerService) {}

  ngOnInit(): void {
    this.dealerService.fetchAllDealers().subscribe((dealers) => {
      console.log('dealers', dealers);
    });
  }
}
