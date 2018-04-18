import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ReadUserComponent } from './read/read-user.component';
import { CreateUserComponent } from './create/create-user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { KeeperService } from './services/keeper.service';
import { SignInComponent } from './signin/sign-in.component';
import {FieldsService} from './services/fields.service'

import { ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'signup', component: CreateUserComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'read', component: ReadUserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ReadUserComponent,
    CreateUserComponent,
    SignInComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [KeeperService,FieldsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
