import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-weight-tracker',
  templateUrl: './weight-tracker.page.html',
  styleUrls: ['./weight-tracker.page.scss'],
})
export class WeightTrackerPage implements OnInit {
  myStatus:string = "undefined";

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  
}
