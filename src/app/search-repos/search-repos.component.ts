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
    this.appService.getRepo(searchUser).subscribe(
      (success)=>{
        this.myRepo = success;//
        return (this.myRepo)
      }, 
      (error)=>{
        return error;
        
      }
    )
   }
    

  ngOnInit(): void {
    this.getRepo('Michael-Otieno')
  }

}
