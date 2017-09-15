import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];


  constructor(private postsService: PostsService) {

    postsService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit() {

  }



}


interface Post {
  id: number,
  title: string,
  body: string
}