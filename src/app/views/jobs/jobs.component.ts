import { Component } from '@angular/core';
import { JobComponent } from '../../components/job/job.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobComponent, NgFor],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
}
