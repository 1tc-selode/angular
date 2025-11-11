import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface User{
  id:number;
  name:string;
  email:string;
}

interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;
}

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit{
  loading = false;

  users: User[] = [];
  posts: { [key:number]: Post[]} = [];

  error = "";

  ngOnInit(): void {
    this.fetchUsers();
  }

  async fetchUsers(){
    this.loading = true;
    this.error = "";
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    } catch (error) {
      this.error = "nem jo teso";
    } finally{
      this.loading = false;
    }

  }

  async loadPosts(userId:number){
    this.loading = true;
    this.error = "";
    if (this.posts[userId]) return;
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/userId'+userId);
      this.posts = await response.json();
    } catch (error) {
      this.error = "nem jo teso";
      this.posts[userId] = [];
    } finally{
      this.loading = false;
    }

  }
}
