import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AppServicesService } from '../app-services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myProfile: User[] = [];

  constructor(public appService: AppServicesService) { }
  
  getUser(searchUser: any){
    this.appService.getUser(searchUser).then(
      (success)=>{
        this.myProfile = this.appService.myProfile;
        console.log(this.myProfile)
      }, 
      (error)=>{
        return error;
        
      }
    )
  }

  ngOnInit(): void {
    this.getUser('Michael-Otieno');
  }

}
