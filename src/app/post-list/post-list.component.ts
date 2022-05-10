import { Component, OnInit } from '@angular/core';
import posts from '../posts.json';
import { marked } from 'marked';

for (const post of posts) {
  post.htmlstr = marked(post.markdownstr);
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post_list = posts;
  constructor() { }

  ngOnInit(): void {
  }
}
