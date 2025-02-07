import { Component, input, ViewChild } from '@angular/core';
import { GifsServices } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

 
  constructor(private gifsServices:GifsServices){}
get tags(){
  return this.gifsServices.tagHistory;
}
searchTag(tag:string){
  this.gifsServices.searchTag(tag);
}
}
