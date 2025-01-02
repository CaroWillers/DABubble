import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { CloudService } from './core/services/cloud.service';
import { InfoFlyerService } from './core/services/info-flyer.service';
import { DummyDataService } from './core/services/dummy-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dabubble';

  constructor(
    public cloudService: CloudService,
    public flyerService: InfoFlyerService,
    private dummyDataService: DummyDataService
  ) {}

  ngOnInit(): void {
    this.initializeDummyData();
  }

  async initializeDummyData() {
    try {
      console.log('Initialisierung der Dummy-Daten gestartet...');
      await this.dummyDataService.resetPublicUserData();
      await this.dummyDataService.addDummyChannels();
      await this.dummyDataService.populateChannelsWithMembers();
      await this.dummyDataService.createMessagesCollection();
      await this.dummyDataService.createThreadMessages();
      console.log('Dummy-Daten wurden erfolgreich initialisiert.');
    } catch (error) {
      console.error('Fehler beim Initialisieren der Dummy-Daten:', error);
    }
  }
}
