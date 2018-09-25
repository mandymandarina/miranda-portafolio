import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';
@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css'],
  animations: [
    trigger('bounce',[transition('*=>*',useAnimation(bounce))])
  ]
})
export class FirstScreenComponent implements OnInit {
bounce:any;
  constructor() { }

  ngOnInit() {
  }

}
