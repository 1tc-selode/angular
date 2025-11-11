import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Userdetail } from "../userdetail/userdetail";

@Component({
  selector: 'app-user',
  imports: [CommonModule, Userdetail],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{
  users: any[] = [];
  loaded = false;
  selectedpost:any = null;
  detailsloading = false;

  ngOnInit(): void {
    this.loadPosts();
  }
  async loadPosts() {
    this.loaded = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    this.users = await res.json();
    this.loaded = true;
  }

  async selectPost(id:number){
    this.detailsloading = true;
    this.selectedpost = null;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    this.selectedpost = await res.json();
    this.detailsloading = false;
  }

  clearSelection(){
    this.selectedpost = null;
  }
}
