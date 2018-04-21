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
  title: String;
  note: String;
  updateFlg: Boolean;
  noteId: String;
  @ViewChild('closeButton') closeBtn: ElementRef;
  @ViewChild('addNoteBtn') addNoteBtn: ElementRef;
  @ViewChild('deleteNoteBtn') deleteNoteBtn:ElementRef;
  @ViewChild('editNoteBtn') editNoteBtn:ElementRef;

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

  private addModalConfirm() {
    this.updateFlg = false;
    this.title = '';
    this.note = '';
    this.noteId = '';
    document.getElementById('addNoteButton').setAttribute('data-toggle', 'modal');
    document.getElementById('addNoteButton').setAttribute('data-target', '#addNote');

    this.addNoteBtn.nativeElement.click();

  }
  private openEditNoteModal(n): void {
    this.updateFlg = true;
    this.title = n.title;
    this.note = n.content;
    this.noteId = n._id;
    document.getElementById('editNote').setAttribute('data-toggle', 'modal');
    document.getElementById('editNote').setAttribute('data-target', '#addNote');

    this.editNoteBtn.nativeElement.click();
  }

  private deleteModalConfirm(n) {
    this.noteId = n._id;
    document.getElementById('deleteNote').setAttribute('data-toggle', 'modal');
    document.getElementById('deleteNote').setAttribute('data-target', '#deleteModal');

    this.deleteNoteBtn.nativeElement.click();

  }

  deleteNote(n) {
    this.noteId = n;
    this.keeper.deleteNote(this.noteId).subscribe(res => {
      this.noteDetails = res;
      this.getNotes(this.eMail);
    })
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

  onSubmit(f: NgForm, c, u) {
    if (u == true) {
      this.keeper.updateNote(f, this.eMail).subscribe(res => {
        f.resetForm();
        this.closeModal();
        this.getNotes(this.eMail);
      });
    }
    else {
      this.keeper.createNote(f, this.eMail).subscribe(res => {
        f.resetForm();
        this.closeModal();
        this.getNotes(this.eMail);
      });
    }

  }

  logout() {
    this.auth.logout();
  }

}