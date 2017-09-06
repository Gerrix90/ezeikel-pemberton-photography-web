import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TaveApiService {
  private _studioId: string;
  private _secretKey: string;
  private _apiUrl: string;

  constructor(private http: HttpClient) {
    this._studioId = `4b007MTo`;
    this._secretKey = `831579260563ea036f63bd23a6c00c98d30c051e`;
    this._apiUrl = `https://tave.com/app/webservice/create-lead/`;
  }

  createLead(data) {
    const url = this._apiUrl + this._studioId;
    let body;

    data.SecretKey = this._secretKey;

    body.JSON = JSON.stringify(data);

    this.http
      .post(`${url}`, body, {
      })
      .subscribe(
        err => {
          console.log('Something went wrong!');
        }
      );
  }

}
