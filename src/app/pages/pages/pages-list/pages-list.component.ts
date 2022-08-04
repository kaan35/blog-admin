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

  constructor(private pagesService: PagesService) {}

  ngOnInit(): void {
    this.records();
  }

  records(): void {
    this.pagesService.items().subscribe((pages) => (this.pages = pages));
  }
}
