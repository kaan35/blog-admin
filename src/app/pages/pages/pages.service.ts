import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from './page';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  items(): Observable<Page[]> {
    return this.http.get<Page[]>(this.apiUrl + 'pages');
  }
}
