import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages.service';
import { Page } from '../page';
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
  notificationShow: boolean = false;
  notificationMessage: string | undefined;
  notificationStatus: string | undefined;
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
    private route: ActivatedRoute,
    private pagesService: PagesService
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
    console.log(this.formData.valid);
    if (this.formData.valid) {
      this.pagesService
        .onSubmitDetail(this.formData.value, id)
        .subscribe((response) => {
          this.notificationShow = true;
          this.notificationMessage = response.message;
          this.notificationStatus = response.status;
        });
    } else {
      this.notificationShow = true;
      this.notificationMessage = 'Form not valid';
      this.notificationStatus = 'error';
    }
  }
}
