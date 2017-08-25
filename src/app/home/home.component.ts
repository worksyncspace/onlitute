import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {

  constructor(private _router: Router) {

  };
// tslint:disable-next-line:member-ordering
currentUrl: string = this._router.url;

  ngOnInit() {

  }

}
