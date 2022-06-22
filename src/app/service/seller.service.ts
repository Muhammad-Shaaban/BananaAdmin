import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  baseUrl =  environment.url + 'admin/sellers';
  baseUrl2 =  environment.url + 'admin/seller';

  searchPageNumber = 1;
  searchQuery = '';

  constructor(private http: HttpClient) { }

  getAllSellers() {
    console.log(this.baseUrl);
    return this.http.get(this.baseUrl + '?page=1&filter=0', {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  getSingleSeller(id){
    return this.http.get(this.baseUrl2 + '/single/' + id, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  blockUnBlockSeller(id){
    return this.http.post(this.baseUrl2 + '/block/unblock', id, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }

  searchSeller(){
    return this.http.get( environment.url + 'admin/user/search?search=' + this.searchQuery + '&type=seller&page=' + this.searchPageNumber, {headers: {Authorization: 'hh ' + localStorage.getItem('token')}});
  }
}
