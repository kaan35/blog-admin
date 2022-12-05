import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages.service';
import { Page } from '../page';
import { NotificationService } from '../../../components/notification/notification.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pages-detail',
  templateUrl: './pages-detail.component.html',
  styleUrls: ['./pages-detail.component.css'],
})
export class PagesDetailComponent implements OnInit {
  page: Page | undefined;
  formData = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    publishStatus: new FormControl(),
  });

  constructor(
    private builder: FormBuilder,
    private notificationService: NotificationService,
    private pagesService: PagesService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.pagesService.detail(id).subscribe((page) => {
      this.formData.controls['title'].setValue(page.title);
      this.formData.controls['content'].setValue(page.content);
      this.formData.controls['publishStatus'].setValue(page.publishStatus);
      return (this.page = page);
    });
  }

  onSubmit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    if (this.formData.valid) {
      this.pagesService
        .onSubmitDetail(this.formData.value, id)
        .subscribe((response) => {
          const { data, message, status } = response;
          this.notificationService.create({ status, message });
          if (status == 'success') {
            this.page = data;
          }
        });
    } else {
      this.notificationService.create({
        message: 'Form not valid',
        status: 'error',
      });
    }
  }
}
