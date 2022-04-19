import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public http: HttpClient, private route:ActivatedRoute) { }
  itemId ='';
  itemInfo:any;
  
  getUrl(url:string){
    return this.http.get(url);
  }

  ngOnInit(): void {
    // On recuperer l'id dans la route active.
    this.itemId = this.route.snapshot.params['itemId'];
    // On charge les données correspondantes à l'image.
    this.http.get('https://picsum.photos/id/'+this.itemId+'/info').subscribe( (data) =>{
      this.itemInfo = data;
    }
    );
  }

}
