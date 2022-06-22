import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  baseUrl = environment.url + 'admin/pull/requests';
  baseUrl2 = environment.url + 'admin/bananaDelivery';

  pageNumber = 1;

  constructor(private http: HttpClient) { }

  getAllPulledMoney(){
    return this.http.get(this.baseUrl + '?page=' + this.pageNumber + '&filter=binding', {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  acceptPull(formData){
    return this.http.post(this.baseUrl + '/accept', formData, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  refusePull(formData){
    return this.http.post(this.baseUrl + '/refuse', formData, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  getBananaDelivery(){
    return this.http.get(this.baseUrl2, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  updateBananaDelivey(formData){
    return this.http.post(this.baseUrl2 + '/update', formData, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  getPaymentReport(id){
    return this.http.get( environment.url + 'admin/pay/report/' + id, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}})
  }
}
