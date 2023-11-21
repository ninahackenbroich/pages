import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Handball',
      url: 'https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFuZGJhbGx8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Van',
      url: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Taylor',
      url: 'https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF5bG9yJTIwc3dpZnR8ZW58MHx8MHx8fDA%3D'
    }
  ];
}
