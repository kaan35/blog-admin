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

@Component({
  selector: 'app-pages-add',
  templateUrl: './pages-add.component.html',
  styleUrls: ['./pages-add.component.css'],
})
export class PagesAddComponent implements OnInit {
  page: Page | undefined;
  notificationShow: boolean = false;
  notificationMessage: string | undefined;
  notificationStatus: string | undefined;
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
    private route: ActivatedRoute,
    private router: Router,
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.formData.valid) {
      this.pagesService
        .onSubmitAdd(this.formData.value)
        .subscribe((response) => {
          this.notificationShow = true;
          this.notificationMessage = response.message;
          this.notificationStatus = response.status;
          if (response.status == 'success') {
            this.router.navigate(['pages/detail/' + response.data._id]);
          }
        });
    } else {
      this.notificationShow = true;
      this.notificationMessage = 'Form not valid';
      this.notificationStatus = 'error';
    }
  }
}
