import { createSelector } from "@ngrx/store";
import { State } from "../reducers";
import { BlogState } from "../reducers/blog.reducer";

const selectBlog : any = ( state : State ) => state.blog ;

export const selectBlogsList = createSelector(
  selectBlog,
  ( state : BlogState ) => state.blogsList
)
