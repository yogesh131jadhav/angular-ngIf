import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public criteria: string = 'case1';
  public canEdit: boolean = false;
  constructor() {}

  ngOnInit() {}
}
