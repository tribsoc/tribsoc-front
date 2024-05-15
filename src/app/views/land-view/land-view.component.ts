import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-land-view',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './land-view.component.html',
  styleUrl: './land-view.component.css'
})
export class LandViewComponent {

}
