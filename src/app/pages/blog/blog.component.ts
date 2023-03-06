import { Component, OnInit } from '@angular/core';

// Types of Blog
import { AbbrBlogData, BlogData, blog_list } from 'src/app/types/blog.types';

// NgRx
import { select, Store } from '@ngrx/store';
import { GetBlogsList } from 'src/app/redux/actions/blog.action';
import { selectBlogsList } from 'src/app/redux/selectors/blog.selector';

// Service
import { BlogService } from 'src/app/redux/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  abbr_blog_list : Array<AbbrBlogData> = [
    {
      title : 'Leoville Las Cases: Vineyards, Winemaking, 8 Best Wines (2022)',
      author : 'BY HUNTER ROBILLARD'
    },
    {
      title : '5 Best White Wine Glasses (Buying Tips, White vs Red Glasses)',
      author : 'BY ANTHONY ZHANG'
    },
    {
      title : 'Dom Perignon 2008 (Tasting Notes, Price, Easiest Way To Buy)',
      author : 'BY ANTHONY ZHANG'
    },
    {
      title : '5 Types of Wine You Must Know of (A Complete Guide)',
      author : 'BY DAVID BUTLER'
    }
  ]

  blog_tags : Array<string> = [
    "Latest",
    "Investing",
    "Culture",
    "Investment wines",
    "Other wine regions",
    "Fetch wines",
    "Italian wines",
    "our most popular"
  ]

  blogsList : BlogData[] = [] ;

  loading_arr : number[] = [1,2,3,4,5] ;

  loading : boolean = true ;
  selected_tag : number = 0 ;

  constructor(private store : Store, private blogService : BlogService) {
    this.store
      .pipe(select(selectBlogsList))
      .subscribe((blogsList) => {
        this.blogsList = blogsList ;
        if(this.blogsList.length) this.loading = false ;
      }) ;

    selectBlogsList.release() ;

    this.blogService.getBlogsList()
      .then((res : any) => {
        console.log(res) ;
        setTimeout(() => {
          this.store.dispatch(
            new GetBlogsList({
              blogsList: res.data.blogs
            })
          );
        }, 3000) ;
      })
      .catch((err : any) => {
        console.log(err) ;
      })
  }

  ngOnInit(): void {

  }

  selectTag(index : number) {
    this.selected_tag = index ;
  }
}
