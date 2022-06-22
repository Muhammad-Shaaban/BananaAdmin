import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl = environment.url + 'admin/notfications/sendAll';
  baseUrl2 = environment.url + 'admin/notfications';

  constructor(private http: HttpClient) { }

  sendNotification(formData){
    return this.http.post(this.baseUrl, formData, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  sendNotitfySeller(formData){
    return this.http.post(this.baseUrl2 + '/send/seller', formData, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }
}
