import { Component, OnInit } from '@angular/core';

export class Coach {
  id: number;
  name: string;
  qualification: string;
  price: number;
  verifyed: boolean;
}
@Component({
  selector: 'app-user-learner-dashboard',
  templateUrl: './user-learner-dashboard.component.html',
  styleUrls: ['./user-learner-dashboard.component.css']
})


export class UserLearnerDashboardComponent implements OnInit {
  coachs: Coach[] = [
    {
      id: 1,
      name: 'Lisa Snow',
      qualification: 'MS - Computer',
      price: 32,
      verifyed: true
    },
    {
      id: 2,
      name: 'Bower',
      qualification: 'MS - Art',
      price: 18,
      verifyed: false
    },
    {
      id: 3,
      name: 'Clark',
      qualification: 'Bsc - Tech',
      price: 35,
      verifyed: false
    },
    {
      id: 4,
      name: 'Paul',
      qualification: 'Phd - Science',
      price: 26,
      verifyed: true
    },
    {
      id: 5,
      name: 'Wanda',
      qualification: 'MS - Agricultural',
      price: 10,
      verifyed: false
    },
    {
      id: 6,
      name: 'Andrea',
      qualification: 'MS - Computer',
      price: 16,
      verifyed: true
    },
    {
      id: 7,
      name: 'Roger James',
      qualification: 'MS - Computer',
      price: 22,
      verifyed: true
    },
    {
      id: 7,
      name: 'Roger James',
      qualification: 'MS - Computer',
      price: 22,
      verifyed: true
    },
    {
      id: 8,
      name: 'Michael P. Manning',
      qualification: 'Food science technician',
      price: 22,
      verifyed: true
    },
    {
      id: 9,
      name: 'Anabel M. Nelson',
      qualification: 'Gaming manager',
      price: 22,
      verifyed: true
    },
    {
      id: 10,
      name: 'Anne K. Brown',
      qualification: 'Firefighter',
      price: 22,
      verifyed: true
    },
  ];
  clickedData = false;
  coachDetails = Coach;
  selectedCoach(coachPro) {
    this.clickedData = true;
    this.coachDetails = coachPro;
  };
  constructor() { }

  ngOnInit() {
  }

}

