import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-fold1',
  templateUrl: './fold1.component.html',
  styleUrls: ['./fold1.component.css']
})
export class Fold1Component implements OnInit {

  constructor(private _router: Router) {

  };
// tslint:disable-next-line:member-ordering
currentUrl: string = this._router.url;

  ngOnInit() {

  }

}
