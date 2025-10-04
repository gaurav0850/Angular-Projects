import { Component, OnDestroy, OnInit, inject, DestroyRef} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
  //currentStatus can be only one of the 3 strings
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    console.log('ng on init');
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(()=> {
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log('After view init');
  }
}
