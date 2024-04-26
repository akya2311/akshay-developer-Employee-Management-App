import { Component, OnInit } from '@angular/core';
import { JwtTokenLibService } from 'projects/jwt-token-lib/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-jwt-token';

  constructor(private _jwtService: JwtTokenLibService) {

  }

  ngOnInit() {
    /* Valid structure test  */
    this._jwtService.isTokenValid('abc.efg.yui');

    /* Invalid structure test  */
    this._jwtService.isTokenValid('abc.efg');
  }

}
