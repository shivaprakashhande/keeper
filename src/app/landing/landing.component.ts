import { Component, OnInit } from '@angular/core';
import { Router, Route,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    this.router.navigate(['/signup'])
  }

  onSignIn() {
    this.router.navigate(['/signin'])
  }

}
