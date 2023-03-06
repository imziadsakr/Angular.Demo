import { Injectable } from '@angular/core' ;
import { Actions, Effect, ofType } from '@ngrx/effects' ;
import { BlogActions, GetBlogsList } from '../actions/blog.action';
import { BlogService } from '../services/blog.service';
import { mergeMap, mergeWith } from 'rxjs' ;

@Injectable()

export class BlogEffects {
  @Effect()
  loadBlogsList$ = this.actions$.pipe(
    ofType(BlogActions.GetBlogsList),
    mergeMap(() =>
      this.blogService.getBlogsList()
        .then((res:any) => {
          console.log('ddd') ;
          new GetBlogsList({
            blogsList : res.data.blogs
          })
        })
        .catch((err : any) => {
          console.log(err) ;
        })
    )
  )

  constructor(
    private actions$ : Actions,
    private blogService : BlogService
  ){

  }
}
