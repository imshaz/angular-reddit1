import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:string[]
  constructor() {
    // add static data for users

    this.users=['shax', 'imad', 'david']
  }

  ngOnInit(): void {
  }

}
