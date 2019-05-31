import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

users = [];
dataBase = localStorage;
session = sessionStorage;
showEdit : boolean = false;

constructor(private router: Router) {
  if(!this.session.length){
    this.router.navigate(["login"]);
  }
}

  ngOnInit() {
    for(let i : number = 0, len : number = this.dataBase.length; i < len; i++){
      this.users[i] = JSON.parse(this.dataBase.getItem(this.dataBase.key(i)));
      this.users[i].login = this.dataBase.key(i);
    }
  }

  onFilter(){
    this.users = [];

    let login = (<HTMLInputElement>document.getElementById("login_filter")).value,
        name = (<HTMLInputElement>document.getElementById("name_filter")).value,
        email = (<HTMLInputElement>document.getElementById("email_filter")).value;
    let logReg = new RegExp(login, 'i'),
        nameReg = new RegExp(name, 'i'),
        emailReg = new RegExp(email, 'i');

    for(let i : number = 0, len : number = this.dataBase.length, k: number=0; i < len; i++){
      let curUser = JSON.parse(this.dataBase.getItem(this.dataBase.key(i)));
      curUser.login = this.dataBase.key(i);
      if(logReg.test(curUser.login) && nameReg.test(curUser.name) && emailReg.test(curUser.email)){
        this.users.push( Object.assign({}, curUser) );
      }
    }

  }

  onLogOut(){
    this.session.clear();
    this.router.navigate(["login"]);
  }


}
