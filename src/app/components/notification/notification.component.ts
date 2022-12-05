import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  notification: Notification | object | undefined;

  constructor(public notificationService: NotificationService) {}

  ngOnInit() {
    this.subscription = this.notificationService
      .getNotification()
      .subscribe((notification) => (this.notification = notification));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  remove() {
    this.notificationService.remove();
  }
}
