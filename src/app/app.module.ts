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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KeeperService } from './services/keeper.service';
import { SignInComponent } from './signin/sign-in.component';
import { FieldsService } from './services/fields.service'
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'read', redirectTo: 'read' },
  { path: 'landing', component: LandingComponent },
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
  providers: [KeeperService, FieldsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
