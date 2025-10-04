import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit, OnDestroy {
  //currentStatus can be only one of the 3 strings
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: number;

  ngOnInit() {
    console.log('on init');
    this.interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  ngOnDestroy(): void {
    console.log('');
  }
}
