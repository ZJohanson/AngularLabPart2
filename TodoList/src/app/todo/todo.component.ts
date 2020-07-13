import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  userTask = '';
  filter = '';
  todoList: TodoInterface[] = [];
  constructor() {}

  ngOnInit(): void {}

  addTask() {
    if (this.userTask) {
      this.todoList.push({
        id: this.todoList.length + 1,
        task: this.userTask,
        completed: false,
      });
      this.userTask = '';
    }
  }

  removeTask(id) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }

  completeTask(id) {
    this.todoList = this.todoList.filter((item) => {
      if (item.id === id) {
        item.completed = true;
      }
      return item;
    });
  }
}
