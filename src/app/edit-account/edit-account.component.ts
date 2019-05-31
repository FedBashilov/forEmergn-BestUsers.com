import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  session = sessionStorage;
  dataBase = localStorage;
  deleteRequest : boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    let curUser = JSON.parse( this.dataBase.getItem(this.session.key(0)) );
    curUser.login = this.session.key(0);
    (<HTMLInputElement>document.getElementById("login")).value = curUser.login;
    (<HTMLInputElement>document.getElementById("name")).value = curUser.name;
    (<HTMLInputElement>document.getElementById("email")).value = curUser.email;
  }

  onSaveChanges(){
    let login : string = (<HTMLInputElement>document.getElementById("login")).value,
        name : string = (<HTMLInputElement>document.getElementById("name")).value,
        email : string = (<HTMLInputElement>document.getElementById("email")).value,
        password1 : string = (<HTMLInputElement>document.getElementById("password1")).value;
    let data = {
      name: name,
      email: email,
      password: password1
    };
    let serialData = JSON.stringify(data);

    this.dataBase.removeItem(this.session.key(0));
    this.dataBase.setItem(login, serialData);
    this.session.clear();
    this.session.setItem(login, "");
  }

  onDeleteConfirm(){
    this.dataBase.removeItem(this.session.key(0));
    this.session.clear();
    this.router.navigate(["login"]);
  }

}
