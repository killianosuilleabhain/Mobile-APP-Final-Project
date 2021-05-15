import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../Services/workouts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
WorkoutData:any = [];
  constructor(private workoutService:WorkoutsService) {}

ngOnInit(){
  this.workoutService.GetWorkoutData().subscribe(
    (data)=>{
      this.WorkoutData = data.Workout;
      console.log(this.WorkoutData);
    }
  );
}

}
