import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { UserForRegister, UserForLogin } from '../model/user';
// import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    //baseUrl = environment.baseUrl;
    //constructor(private authservice: AuthService) { }

    constructor(private http: HttpClient) { }

    authUser(user: any) {
       // return this.http.post(this.baseUrl + '/account/login', user);
       //const user=this.authservice.authUser(loginform.user)
    }
//
   // registerUser(user: UserForRegister) {
       // return this.http.post(this.baseUrl + '/account/register', user);
    //}

}
