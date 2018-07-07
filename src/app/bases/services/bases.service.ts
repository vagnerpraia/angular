import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasesService {

  constructor(private http: HttpClient) { }

  getBases() {
    const url = `${environment.apiUrl}/posts/timeline?filter[where][type]=text`;
    return this.http.get(url);
  }

  getPerfil(perfilId) {
    const url = `${environment.apiUrl}/profiles/${perfilId}?filter[include]=posts`;
    return this.http.get(url);
  }
}
