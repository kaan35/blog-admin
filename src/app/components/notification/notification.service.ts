import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

class Notification {
  public status: string | undefined;
  public message: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification = new BehaviorSubject<Notification>({
    message: '',
    status: '',
  });

  constructor() {}

  getNotification(): Observable<Notification> {
    return this.notification;
  }

  setNotification(value: Notification) {
    this.notification.next(value);
  }

  create(value: Notification) {
    this.startTimer();
    this.notification.next(value);
  }

  remove() {
    this.setNotification({
      message: '',
      status: '',
    });
  }

  startTimer() {
    setTimeout(() => {
      this.remove();
    }, 5000);
  }
}
