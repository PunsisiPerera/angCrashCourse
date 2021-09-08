import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //assign TASK as a property of the component
  tasks: Task[] = [];
  
  //to use the servise, provide the argument 
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    //subscribe to the observable(similar to promise)
    //bring the service 
    //call get
    this.taskService.getTasks().subscribe((tasks)=>(this.tasks = tasks));
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>(this.tasks= 
      this.tasks.filter(t =>t.id !== task.id))); //filter from the ui
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
  }
}
