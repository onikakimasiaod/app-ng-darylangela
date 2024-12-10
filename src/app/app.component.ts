import { Component, OnInit, inject } from '@angular/core';
import { GuestsService } from './services/guests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-ng-darylangela';
  
  private readonly guestsService = inject(GuestsService)

  ngOnInit(): void {
      this.guestsService.getGuests().subscribe(console.log)
  }
}