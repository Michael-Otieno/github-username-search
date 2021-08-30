import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
import { DateAgoPipe } from './pipes/date-ago.pipe';
// import { AppServicesService } from './app-services.service';  

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchComponent,
    SearchReposComponent,
    HomeComponent,
    HighlightDirective,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],   //
  bootstrap: [AppComponent]
})
export class AppModule { }
