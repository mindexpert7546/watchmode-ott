import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl ='http://localhost:3000';
  constructor(private _http:HttpClient) { }

 getTodoLists(){
  return this._http.get<Todo[]>(`${this.baseUrl}/todos`);
 }

 addTodo(postDate:Todo){
  return this._http.post(`${this.baseUrl}/todos`,postDate);
 }

 UpdateTodo(postDate:Todo){
  return this._http.patch(`${this.baseUrl}/todos/${postDate.id}`,postDate);
 }

 deleteTodo(id:Todo['id']){
  return this._http.delete(`${this.baseUrl}/todos/${id}`);
 }
}
