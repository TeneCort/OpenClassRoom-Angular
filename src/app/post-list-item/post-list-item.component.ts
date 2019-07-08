import { Component, OnInit, Input } from '@angular/core';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	/*
	* Our array elements are stored here
	*
	*/
	@Input() postTitle: String;
	@Input() postText: String;
	@Input() postCreationDate: String;
	@Input() postLikes: number;
	@Input() postId: number;

	constructor(private postService: PostService) {}

  	ngOnInit() {
  	}
  	/*
	* Returns array's "content" value
	*
	*/	
	getId() {
		return this.postId;
	}
	/*
	* Returns array's "content" value
	*
	*/	
	getText() {
		return this.postText;
	}
	/*
	* Returns array's "title" value
	*
	*/
	getTitle() {
		return this.postTitle;
	}
	/*
	* Returns array's "createdAt" value
	*
	*/
	getDate() {
		return this.postCreationDate;
	}
	/*
	* Returns array's "loveIts" value
	*
	*/
	getLikes() {
		return this.postLikes;
	}
	/*
	* Sets local postLikes value
	*
	*/
	setLikes($value) {
		this.postLikes+=$value;
	}
	/*
	* Calls setLikes() and passes the appropriate value to sum
	*
	*/
	onLike() {
		this.setLikes(1);
	}
	/*
	* Calls setLikes() and passes the appropriate value to sum
	*
	*/
	onDislike() {
		this.setLikes(-1);
	}
	/*
	* Deletes post
	*
	*/
	onDelete() {
		this.postService.deletePost(this.postId);
	}

}
