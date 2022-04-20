import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  urlChuck = 'https://api.chucknorris.io/jokes/random';

  getUrl(url:string){
    return this.http.get(url);
  }

  imgPicsum(id:number){
    return 'https://picsum.photos/id/' + id + '/640/480'
  }

  listPicsum(num:number){
    return 'https://picsum.photos/v2/list?page='+num+'&limit=6'
  }
  
  bigImgPicsum(id:number){
    return 'https://picsum.photos/id/' + id + '/1280/960?'
  }

  imgInfo(id:number){
   return 'https://picsum.photos/id/'+id+'/info'
  }
}
