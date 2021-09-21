import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private servUrl = "http://localhost:62327/api/Users";

  constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
  
  postData(formData){ 
    return this.http.post(this.servUrl+'/AddUser',formData);  
  }  
}
