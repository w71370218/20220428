import { Component, OnInit } from '@angular/core';
import posts from '../../assets/posts.json';
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
  public imagePath: string;
  public post_list: any;

  constructor() {
    this.imagePath = window.location.href + "assets/FD2Je26VcAAIBBy.jfif";
    this.post_list = posts;
  }

  ngOnInit(): void {
  }
}
