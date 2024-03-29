import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveryAccountService {

  baseUrl = environment.url + 'admin/delivery';
  pageNumber = 1;

  constructor(private http: HttpClient) { }

  getAllDeliveryAccounts(){
    return this.http.get(this.baseUrl + '/get', {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  getAllDeliveryAccountsP(){
    return this.http.get(this.baseUrl + '/get' + '?page=' + this.pageNumber, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  createNewDeliveryAcc(data){
    return this.http.put(this.baseUrl + '/create', data, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }
}
