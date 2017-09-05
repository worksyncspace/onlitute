import { Component, OnInit } from '@angular/core';
import {CheckboxModule} from 'primeng/primeng';

@Component({
  selector: 'app-coach-complete-profile',
  templateUrl: './coach-complete-profile.component.html',
  styleUrls: ['./coach-complete-profile.component.css']
})
export class CoachCompleteProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
export class CheckboxDemo {
      selectedCities: string[] = [];
      selectedCategories: string[] = ['Technology', 'Sports', 'mom'];
      checked = false;
  }
