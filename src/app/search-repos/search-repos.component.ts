import { Component, OnInit } from '@angular/core';
import { AppServicesService } from '../app-services.service';//
import { Repo } from '../repo';//

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {

  myRepo: Repo[]=[];//

  constructor(public appService: AppServicesService) {//
   }

   //
   getRepo(searchUser: any){
    this.appService.getRepo(searchUser).then(
      (success)=>{
        this.myRepo = this.appService.myRepos;//
      }, 
      (error)=>{
        return error;
        
      }
    )
   }
    

  ngOnInit(): void {
    
  }

}
