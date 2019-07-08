import { Component, OnInit, OnDestroy } from '@angular/core';

import { PostService } from './services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

	postSubscription: Subscription;
	title = 'My post APP';
  	posts: any[];
	  	
	constructor(private postService: PostService) {}

  	ngOnInit() {
  		this.postSubscription = this.postService.postSubject.subscribe(
  			(posts: any[]) => {
  				this.posts = posts;
  			}
		);
		this.postService.emitPostSubject();
  	}

  	ngOnDestroy() {
		this.postSubscription.unsubscribe();
  	}
}
