import { Component, OnInit,  TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AuthService } from '../../services/authentication/auth.service'
import { User } from '../../models/auth/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new User("", "");

  modalRef: BsModalRef;

  constructor(
    private authService: AuthService,
    private modalService: BsModalService) { 
  }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

  onSubmit(modalTemplate: TemplateRef<any>) {
    var isLoggedIn = this.authService.logInUser(this.model);
    
    if(!isLoggedIn) {
      this.modalRef = this.modalService.show(modalTemplate, { ignoreBackdropClick: true });
    }
  }
}
