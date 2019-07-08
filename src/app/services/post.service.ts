import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostService {

	postSubject = new Subject<any[]>();

  	private posts = [
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
	  		loveIts: -1,
	  		createdAt: new Date()
	  	}
  	];

  	emitPostSubject() {
    	this.postSubject.next(this.posts.slice());
	}

  	addPost(title: string, content: string){
  		const postObject = {
  			id : 0,
  			title: '',
  			content: '',
  			loveIts: 0,
  			createdAt: new Date()
  		}
	    postObject.title = title;
	    postObject.content = content;
	    this.posts.push(postObject);
	    this.emitPostSubject();
  	} 	

  	deletePost(id: number){
  		const post = this.posts[id];
  		if (id >= -1) {
        	this.posts.splice(id, 1);
   		} 
  		this.emitPostSubject();
  	}
}