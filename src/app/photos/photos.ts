import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photosdetail } from "../photosdetail/photosdetail";

@Component({
  selector: 'app-photos',
  imports: [CommonModule, Photosdetail],
  templateUrl: './photos.html',
  styleUrl: './photos.css'
})
export class Photos {
  users: any[] = [];
  loaded = false;
  selectedpost:any = null;
  detailsloading = false;

  ngOnInit(): void {
    this.loadPosts();
  }
  async loadPosts() {
    this.loaded = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    this.users = await res.json();
    this.loaded = true;
  }

  async selectPost(id:number){
    this.detailsloading = true;
    this.selectedpost = null;
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
    this.selectedpost = await res.json();
    this.detailsloading = false;
  }

  clearSelection(){
    this.selectedpost = null;
  }
}
