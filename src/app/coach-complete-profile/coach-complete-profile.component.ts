import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-coach-complete-profile',
  templateUrl: './coach-complete-profile.component.html',
  styleUrls: ['./coach-complete-profile.component.css']
})
export class CoachCompleteProfileComponent implements OnInit {
  cities: SelectItem[];

  selectedCities: string[];

  constructor() {
    this.cities = [];
    this.cities.push({ label: 'New York', value: 'New York' });
    this.cities.push({ label: 'Rome', value: 'Rome' });
    this.cities.push({ label: 'London', value: 'London' });
    this.cities.push({ label: 'Istanbul', value: 'Istanbul' });
    this.cities.push({ label: 'Paris', value: 'Paris' });
  }

  ngOnInit() {
  }
}
