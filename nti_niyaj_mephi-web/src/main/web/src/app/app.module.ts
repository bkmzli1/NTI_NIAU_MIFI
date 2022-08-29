import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import { MainHeaderComponent } from './tamplates/main-header/main-header.component';
import { FooterComponent } from './tamplates/footer/footer.component';


const rootRouter: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    MainHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
