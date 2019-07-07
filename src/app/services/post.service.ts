import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PostService {

	postSubject = new Subject<any[]>();

  	private posts = [
	  	{	
	  		id: 1,
	  		title: "Lorem ipsum dolor.",
	  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
	  		loveIts: 1,
	  		createdAt: new Date()
	  	},
	  	{	
	  		id: 2,
	  		title: "Lorem ipsum dolor.",
	  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur laudantium eveniet atque et! Dolore, vel.",
	  		loveIts: 0,
	  		createdAt: new Date()
	  	},
	  	{	
	  		id: 3,
	  		title: "Lorem ipsum dolor.",
	  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, id?",
	  		loveIts: 0,
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
	    postObject.title = name;
	    postObject.content = content;
	    postObject.id = this.posts[(this.posts.length - 1)].id + 1; 
	    console.log(postObject);
	    this.posts.push(postObject);
	    this.emitPostSubject();
  	} 	

  	deletePost(id: number){
  		if (id !== -1) {
        	this.posts.splice(id, 1);
   		}  
  		this.emitPostSubject();
  	}
}