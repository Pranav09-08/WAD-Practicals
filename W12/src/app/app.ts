import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('W12');

  tasks: string[] = [];
  newTask: string = "";
  editIndex: number = -1;

  addTask(){
    if(this.newTask.trim() === "") return;
    this.tasks.push(this.newTask);
    this.newTask="";
  }

  editTask(index : number){
    this.newTask = this.tasks[index];
    this.editIndex = index;
  }

  updateTask()
  {
    if(this.editIndex !== -1)
    {
      this.tasks[this.editIndex] = this.newTask;
      this.newTask = "";
      this.editIndex = -1;
    }
  }

  deleteTask(index: number)
  {
    this.tasks.splice(index,1);
  }
}
