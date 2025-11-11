import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usersdetail } from '../usersdetail/usersdetail';

@Component({
  selector: 'app-users',
  imports: [CommonModule, Usersdetail],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit {
  users: any[] = [];
  loaded = false;
  selectedUserId: number | null = null;
  detailsloading = false;

  ngOnInit(): void {
    this.loadPosts();
  }

  async loadPosts() {
    this.loaded = false;
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    this.users = await res.json();
    this.loaded = true;
  }

  selectPost(id: number) {
    this.selectedUserId = id;
  }

  clearSelection() {
    this.selectedUserId = null;
  }
}

