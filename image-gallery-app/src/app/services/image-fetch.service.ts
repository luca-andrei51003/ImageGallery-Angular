import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
