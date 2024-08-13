import { Component } from '@angular/core';
import { Users } from './users';
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  searchName: string = '';
  data:any[]=[
    new Users("Sonika",27274,"Sonata Software",30000),
    new Users("Shraddha",24569,"Tech Mahindra",22000),
    new Users("Manali",23654,"Capgemini",28000),
    new Users("Sweety",23654,"Star Mark",25000),
    new Users("Trupti",22456,"MPhasis",50000)
  ]
}
