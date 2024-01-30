import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  @ViewChild('todoTask') todoTask:any;
  title = 'TodosApp';
  task='';
  todos:Todo[] = [];

  constructor(private todoService:TodoService){}
  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.todoService.getTodoLists().subscribe(response=>{
       this.todos=response;
      console.log(response)
    })
  }
  

  updateTodo(e:any, todo:Todo){
    this.todoService.UpdateTodo({...todo, completed:e.checked}).subscribe(response=>{
      console.log(response)
    })
  }

  deleteTodo(e:any, id:Todo["id"]){
   this.todoService.deleteTodo(id).subscribe(response=>this.getList());
  }
  addTodo(){
   this.todoService.addTodo({task:this.task,completed:false}).subscribe(response=>{
    this.todoTask.reset();
    this.getList();
   })
  }
  
}
