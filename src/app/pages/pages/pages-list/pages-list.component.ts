import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../page';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css'],
})
export class PagesListComponent implements OnInit {
  pages: Page[] = [];
  notificationShow: boolean = false;
  notificationMessage: string | undefined;
  notificationStatus: string | undefined;

  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
    this.records();
  }

  records(): void {
    this.pagesService.items().subscribe((pages) => (this.pages = pages));
  }

  remove(id: string): void {
    this.pagesService.remove(id).subscribe((response) => {
      this.notificationShow = true;
      this.notificationMessage = response.message;
      this.notificationStatus = response.status;
      if (response.status == 'success') {
        this.records();
      }
    });
  }
}
