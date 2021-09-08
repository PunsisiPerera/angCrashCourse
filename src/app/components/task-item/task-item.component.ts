import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //task passing in the html 
  @Input() task: Task 
  //onDeleteTask is with the type of EventEmitter and Task(interface)
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task){
    this.onToggleReminder.emit(task);
  }

}
