import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Page } from './page';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl;

  detail(id: string): Observable<Page> {
    return this.http.get<Page>(this.apiUrl + 'pages/' + id);
  }

  items(): Observable<Page[]> {
    return this.http.get<Page[]>(this.apiUrl + 'pages');
  }

  onSubmitDetail(data: object, id: string) {
    return this.http
      .patch<any>(this.apiUrl + 'pages/' + id, data)
      .pipe(map((data, error) => (data ? data : error)));
  }
}
