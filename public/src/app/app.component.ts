import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
        this.tasks= data['tasks'];  ///// we receiving data, from data we are taking only tasks. and storing the data in the tasks array

    });
  }
}
