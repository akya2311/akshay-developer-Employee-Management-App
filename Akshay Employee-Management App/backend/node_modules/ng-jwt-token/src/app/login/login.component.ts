import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private _router: Router) { }

  ngOnInit() {
  }


  login() {

    if (this.username === 'vyndev' && this.password === 'vyndev') {
      console.log('Login success');
      this._router.navigate(['/landing-page']);
    } else {
      console.log('Invalid credentials');
    }
  }

}
