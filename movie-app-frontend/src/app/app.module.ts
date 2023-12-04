import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { ReviewComponent } from './components/review/review.component';
import { PosterComponent } from './components/poster/poster.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { Ui5WebcomponentsIconsModule } from '@ui5/webcomponents-ngx/icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    MovieComponent,
    ReviewComponent,
    PosterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    Ui5WebcomponentsModule,
    Ui5WebcomponentsIconsModule.forRoot(['sap-icons']),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
