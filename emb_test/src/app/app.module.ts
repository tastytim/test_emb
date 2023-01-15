import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './services/custom-route-reuse-strategy.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserModule
    ],
  providers: [
    {provide:RouteReuseStrategy,useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent],
  exports:[

  ]

})
export class AppModule { }
