import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesService } from '../pages.service';
import { NotificationService } from '../../../components/notification/notification.service';

@Component({
  selector: 'app-pages-add',
  templateUrl: './pages-add.component.html',
  styleUrls: ['./pages-add.component.css'],
})
export class PagesAddComponent implements OnInit {
  page: Page | undefined;
  formData = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    publishStatus: new FormControl('draft'),
  });

  constructor(
    private builder: FormBuilder,
    private notificationService: NotificationService,
    private pagesService: PagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.formData.valid) {
      this.pagesService
        .onSubmitAdd(this.formData.value)
        .subscribe((response) => {
          const { data, message, status } = response;
          this.notificationService.create({ status, message });
          if (status == 'success') {
            this.router.navigate(['pages/detail/' + data._id]);
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
