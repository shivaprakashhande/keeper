import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { KeeperService } from '../services/keeper.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FieldsService } from '../services/fields.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  closeResult: String;
  messageTitle: String;
  messageBody: String;
  eMail: String;
  password: String;
  result: any;

  constructor(private keeper: KeeperService,
    private modalService: NgbModal,
    private router: Router,
    private fields: FieldsService) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  getDismissReason(r) {

  }

  validateFields(): Boolean {
    if (!this.eMail || !this.password) {
      this.messageBody = "Please enter all the fields!";
      return false;
    } else {
      return true;
    }
  }

  onSubmit(f: NgForm, c) {
    if (!this.validateFields()) {
      this.messageTitle = "Alert";
      this.open(c);
    } else {

      this.keeper.getUserDetails(f.value.eMail).subscribe((res) => {
        this.result = res;
        if (this.result.length > 0) {
          this.fields.storeUserDetails(this.result);
          this.router.navigateByUrl('/read');
        } else {
          this.messageTitle = "Alert";
          this.messageBody = "This Email is not registered!";
          this.open(c);
        }
      })

    }
  }
}
