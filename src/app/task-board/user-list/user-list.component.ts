import { Component } from '@angular/core';
import { Todo } from 'src/classes/Todo';
import { User } from 'src/classes/User';
import { TaskBoardService } from '../taskBoard.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor() { }
  _userList!: User[];
  _todoList: Todo[] = [];
  _flag: boolean = false;

  ngOnInit(): void {
    this.getUserList()

  }


  getUserList() {
    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => response.json())
      .then(json => this._userList = json)
      .then(x => console.log(this._userList))


  }
  getToDoListForUser(u: User) {
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + u.id)

      .then(response => response.json())
      .then(json => this._todoList = json)
      .then(x => console.log(this._todoList))
      .then(x => this._flag = true)
  }
}
