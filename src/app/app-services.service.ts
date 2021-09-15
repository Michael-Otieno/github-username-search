import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repo } from './repo';//
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  myProfile: User[] = [];


  myRepos: Repo[] = [];//

  myToken = 'https://api.github.com/users/'


    // mySecondToken ='GRjG661ECVf13XYhQ'

  // mySecondToken = 'xqRK9Ar1lv3GaRtN'
  

  // token =`?access_token=${environment.accessToken}${mySecondToken}`;
  clientid = environment.clientId
  clientsecret = environment.clientSecret
  

  constructor(private http: HttpClient) {   
  }

  getUser(searchUser: any){
    interface data{
      login:any;
      name: any;
      avatar_url: any;
      location: any;
      followers: any;
      following: any;
      public_repos: any;
      url: any;
    
    }
     return new Promise <void>((resolve, reject)=>{
      this.myProfile = [];
      this.http.get <data>(this.myToken + searchUser + "?client_id="+this.clientid+"&client_secret="+this.clientsecret).toPromise().then(
        (results)=>{this.myProfile.push(results);
          resolve();
        },
          (error)=>{
            reject(error);
          }
      )
    })

    // return new Promise <void>((resolve, reject)=>{
    //   this.myProfile = [];
    //   this.http.get <data>(this.myToken + searchUser + this.token).toPromise().then(
    //     (results)=>{this.myProfile.push(results);
    //       resolve();
    //     },
    //       (error)=>{
    //         reject(error);
    //       }
    //   )
    // })

  }

  getRepo(searchUser:any):Observable<any>{
    return this.http.get(this.myToken + searchUser + "/repos?client_id=" + this.clientid +"&client_secret="+this.clientsecret)
  }


  // getRepo(searchUser:any):Observable<any>{
  //   return this.http.get(this.myToken + searchUser + '/repos' + this.token)
  // }

 

}
