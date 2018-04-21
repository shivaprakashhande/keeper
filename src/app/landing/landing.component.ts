import { Component, OnInit } from '@angular/core';
import { Router, Route,ActivatedRoute } from '@angular/router';
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }

  ngOnInit() {
    this.auth.getProfile(()=>{
      this.router.navigate(['read'])
    })
  }

  onSignIn() {
   this.auth.login();
  }

}
