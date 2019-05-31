import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./../logRegStyle.css']
})
export class RegistrationComponent implements OnInit {

  dataBase = localStorage;

  constructor(private router: Router) {
    if(sessionStorage.length){
      this.router.navigate(["users"]);
    }
  }

  ngOnInit() {
  }

  onRegistr(){
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
    this.dataBase.setItem(login, serialData);
    this.router.navigate(["login"]);
  }

}
