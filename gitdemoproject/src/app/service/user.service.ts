import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public ht:HttpClient) { }

  saveuser(user:any){



    return this.ht.post(" http://localhost:3000/User" , user);

  }
}
