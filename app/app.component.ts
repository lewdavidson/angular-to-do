import { Component } from '@angular/core';
//importing from Angular framework provides access to everything they need to function as a component.

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To-Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor='let currentTask of tasks'>{{currentTask.description}}</li>
  </div>
  `
})
//component is 'decorator' = tells angular that code following is a new component and should have those functionalities outlines by Angular.
//selector app-root = defines what HTML tag corresponds w the component.
//template provides HTML what you want to be displayed inside that selector tag. Determins how the component appears
//firstTask.description is using "dot notation" to access the stuff inside of firstTask defined below.
//<li *ngFor="let currentTask of tasks">  is the directive.
//*ngFor is angular repeater directive. We have established the <li> element as the repeater template. We're telling Angular to make and additional copy of <li> for each item on the list.
//"let currentTask of tasks" = tells Angular what array we're looping through (tasks array) and what variable to assign to the array item we are currently on (currentTask). As tasks is looped through, each item takes a turn at being currentTask. This is similar to the foorEach() loop. 
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}
//standard name for root component's class. Determines how the component behaves.
//currentFocus can change dynamically byt being targeted in {{}} like above.
//in Angular when a variable in a components class declaration references another variable in that class (ex var month referencing var currentTime) it must be prefaced with this.
export class Task {
  public done: boolean = false;
  constructor(public description: string) {}
}
