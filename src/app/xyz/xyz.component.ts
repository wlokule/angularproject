import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XYZComponent implements OnInit {
  title: string= '';

  constructor() { }

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
  }

}
