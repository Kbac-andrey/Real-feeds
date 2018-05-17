import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NewsService } from './services/news-service.service';
import { MatIconModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material';
import { NewsListComponent } from './news-list/news-list.component';
import {AuthService} from './services/auth.service';
import { CommonModule } from '@angular/common';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { ConfirmationWindowComponent } from './confirmation-window/confirmation-window.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    NewsListComponent,
    ConfirmationWindowComponent,
    UserAreaComponent,
    FavoriteComponent,
    AddNewsComponent,
    FooterComponent,
    FilterPipe,
  ],
  entryComponents: [ConfirmationWindowComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    LocalStorageModule,
    RouterModule.forRoot([
      { path: '',  component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'registration', component: RegistrationComponent},
      { path: 'user/:id', component: UserAreaComponent},
      { path: 'addNews/:id', component: AddNewsComponent},
      { path: 'home', redirectTo: 'HomeComponent'}
    ])
  ],
  providers: [NewsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
