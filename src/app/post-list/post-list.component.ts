import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	/**
	* Our array is stored here and is passed into "post-list-component.html"
	*
	*/
	@Input() postList: String[];

	constructor() {}

	ngOnInit() {}
}
