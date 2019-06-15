import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	/**
	* Main App, contains out title and post list that get passed into "app.component.html"
	* 
	*/
  	title = 'My post APP';

  	posts = [
	  	{
	  		title: "Lorem ipsum dolor.",
	  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
	  		loveIts: 1,
	  		createdAt: new Date()
	  	},
	  	{
	  		title: "Lorem ipsum dolor.",
	  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur laudantium eveniet atque et! Dolore, vel.",
	  		loveIts: 0,
	  		createdAt: new Date()
	  	},
	  	{
	  		title: "Lorem ipsum dolor.",
	  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, id?",
	  		loveIts: 0,
	  		createdAt: new Date()
	  	}
  	];
  	
  	constructor() {}
}
