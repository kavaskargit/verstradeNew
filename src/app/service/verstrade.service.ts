import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VerstradeService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any>('https://us-central1-app-verstrade.cloudfunctions.net/vtApiDevServer/api/v1/utilities/server-time');
  }
  
}
