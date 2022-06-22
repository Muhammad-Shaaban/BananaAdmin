import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.url  + 'admin/login';

  constructor(private http: HttpClient) { }

  login(formData){
    return this.http.post(this.baseUrl, formData);
  }
}
