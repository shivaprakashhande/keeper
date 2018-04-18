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
  @ViewChild('closeButton') closeBtn: ElementRef;

  constructor(private fields: FieldsService, private keeper: KeeperService,
    private modalService: NgbModal,
    private router: Router,
    private ngModalService: BsModalService) { }

  ngOnInit() {
    this.fields.userDetails$.subscribe(res => {
      this.userName = res[0].userName;
      this.eMail = res[0].eMail;
      this.cell = res[0].cell;
    })
    this.getNotes(this.eMail);

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

}