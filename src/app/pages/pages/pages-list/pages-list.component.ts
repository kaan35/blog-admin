import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../page';
import { NotificationService } from '../../../components/notification/notification.service';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css'],
})
export class PagesListComponent implements OnInit {
  pages: Page[] = [];

  constructor(
    private notificationService: NotificationService,
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {
    this.records();
  }

  records(): void {
    this.pagesService.items().subscribe((pages) => (this.pages = pages));
  }

  remove(id: string): void {
    this.pagesService.remove(id).subscribe((response) => {
      const { message, status } = response;
      this.notificationService.create({ status, message });
      if (status == 'success') {
        this.records();
      }
    });
  }
}
