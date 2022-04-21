import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(public settings:SettingsService, public api:ApiService) { }

  sliders:any; //any = declarer sans savoir ce qu'on va mettre dedans



  ngOnInit(): void {
    this.api.getUrl(this.api.urlDekpo).subscribe(
      data => {
        this.sliders = data;
      }
    );

  }

}
