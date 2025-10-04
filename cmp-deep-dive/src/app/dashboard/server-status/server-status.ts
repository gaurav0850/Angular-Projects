import {
  Component,
  OnDestroy,
  OnInit,
  inject,
  DestroyRef,
  signal,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
  //currentStatus can be only one of the 3 strings
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    // subscription
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    console.log('Server status ng on init');
    const interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(()=> {
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log('Server status After view init');
  }
}
