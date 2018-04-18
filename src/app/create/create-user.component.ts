import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { KeeperService } from '../services/keeper.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userName: String;
  eMail: String;
  cell: String;
  password: String;
  confirmPassword: String;
  closeResult: String;
  messageTitle: String;
  messageBody: String;
  recordExists: Boolean = false;
  result: String;
  constructor(private keeper: KeeperService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit() {
  }

  open(content, redirectFlg) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (redirectFlg) this.router.navigate(['/landing'])
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      if (redirectFlg) this.router.navigate(['/landing'])
    });
  }

  getDismissReason(r) {

  }

  validateFields(): Boolean {
    if (!this.userName || !this.eMail || !this.cell || !this.password || !this.confirmPassword) {
      this.messageBody = "Please enter all the fields!";
      return false;
    } else if (this.password !== this.confirmPassword) {
      this.messageBody = "Passwords should match!";
      return false;
    } else {
      return true;
    }
  }
  
  onSubmit(f: NgForm, c) {

    if (!this.validateFields()) {
      this.messageTitle = "Alert";
      this.open(c, false);
    } else {

      this.keeper.getUser(f.value.eMail).subscribe((res) => {
        this.result = res.toString();

        if (this.result != "true") {
          this.keeper.createUser(f).subscribe(res => {
            f.resetForm();
            this.messageTitle = "Success";
            this.messageBody = "Sign up success! Login to continue";
            this.open(c, true)
          });
        }

        if (this.result == "true") {
          this.messageTitle = "Alert";
          this.messageBody = "This Email is already registered";
          this.open(c, false);
        }
      })
    }
  }

}
