import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FieldsService } from '../services/fields.service';
import { KeeperService } from '../services/keeper.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})

export class ReadUserComponent implements OnInit {
  userName: String;
  eMail: String;
  cell: String;
  noteDetails: Response[];
  closeResult: String;
  messageTitle: String;
  messageBody: String;
  modalRef: BsModalRef;
  submitSuccess: Boolean = false;
  profile: any;

  @ViewChild('closeButton') closeBtn: ElementRef;

  constructor(private fields: FieldsService,
    private keeper: KeeperService,
    private auth: AuthService,
    private modalService: NgbModal,
    private router: Router,
    private ngModalService: BsModalService) { }

  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.userName = this.profile.nickname;
      this.eMail = this.profile.name;
      this.getNotes(this.eMail);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.userName = this.profile.nickname;
        this.eMail = this.profile.name;
        this.getNotes(this.eMail);
      });    
    }

   
  }

  getNotes(e) {
    this.keeper.getNoteDetails(this.eMail).subscribe(res => {
      this.noteDetails = res;
    })
  }

  private closeModal(): void {
    this.closeBtn.nativeElement.click();
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

  onSubmit(f: NgForm, c) {
    console.log("submit function")
    this.keeper.createNote(f, this.eMail).subscribe(res => {
      f.resetForm();
      this.closeModal();
      this.getNotes(this.eMail);
    });
  }

  logout(){
    this.auth.logout();
  }

}