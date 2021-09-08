import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Tasks';
//import { TASKS } from 'src/app/mock-tasks';

//use in put/post methods, define the header and set it to the sending method
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //property for the API
  private apiUrl = 'http://localhost:5000/tasks'

  //http will be used=> bring HttpClient
  constructor(private http:HttpClient) { }

  //task as na observable
  //return observable
  getTasks(): Observable<Task[]>{
    // const tasks = of(TASKS); //turn to an observable, default with http
    //return tasks;

    //returning the API values as get request
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`; //get id
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`; //get id
    return this.http.put<Task>(url, task, httpOptions); //pass url and task=> send headers with content type
  }

  addTask(task: Task):Observable<Task>
  {
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }
}
