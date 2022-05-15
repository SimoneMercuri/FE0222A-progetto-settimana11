import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
  {
     path:"",
     component: HomeComponent
  },
  {
    path:"carrello",
    component: CarrelloComponent
  },
  ]




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DettaglioComponent,
    CarrelloComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
