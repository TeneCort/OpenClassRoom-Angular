import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

	posts: any[];
	postSubscription: Subscription;

	constructor(private postService: PostService) {}

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
    for (var i = this.posts.length - 1; i >= 0; i--) {
      console.log(this.posts[i]);
    }
  }

	ngOnDestroy() {
	  this.postSubscription.unsubscribe();
	}
}
