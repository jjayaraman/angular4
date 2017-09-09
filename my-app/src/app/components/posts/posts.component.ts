import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts/posts.service';
import 'rxjs/add/operator/map' ;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];


  constructor(private postsService: PostsService) {

    postsService.getPosts().subscribe(data => {
    //  console.log(data);
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