import { Component } from '@angular/core';
import { log } from 'console';
import { SeedsService } from '../../services/seeds.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

  Doctor: any;
  
  constructor(private SeedsService: SeedsService) 
  {
    
  }

  ngOnInit()
  {
    this.Doctor = this.SeedsService.GetDoctor();
  }

}
