import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(public settings:SettingsService) { }

  ngOnInit(): void {
  }

}
