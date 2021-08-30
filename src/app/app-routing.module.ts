import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "User", component: UserComponent},
  {path: "Repo", component: SearchReposComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
