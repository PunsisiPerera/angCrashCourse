import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask : boolean;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription=this.uiService.onToggle().subscribe(
     (value)=>(this.showAddTask = value)
    );
   }

  ngOnInit(): void {
  }

  submitted =false;

  onSubmit(){
    this.submitted = true;
  }
  
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
