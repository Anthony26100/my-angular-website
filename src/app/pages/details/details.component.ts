import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  itemId ='';

  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['itemId'];
    console.log('',this.itemId);
  }

}
