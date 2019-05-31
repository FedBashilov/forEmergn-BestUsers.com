import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../logRegStyle.css']
})
export class LoginComponent implements OnInit {

  dataBase = localStorage;
  passwordError : boolean = false;

  constructor(private router: Router) {
    if(sessionStorage.length){
      this.router.navigate(["users"]);
    }
  }

  ngOnInit() {
  }

  onLogin(){
    let login :string = (<HTMLInputElement>document.getElementById("login")).value,
        password :string = (<HTMLInputElement>document.getElementById("password")).value,
        data = JSON.parse(this.dataBase.getItem(login));
    if(password == data.password){
      sessionStorage.setItem(login,'loggedIn');
      this.router.navigate(["users"]);
    }
    else{
      this.passwordError = true;
    }
  }


}
