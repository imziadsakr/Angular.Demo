import { ActionReducerMap } from '@ngrx/store';
import * as Blog from './blog.reducer' ;

export interface State {
  blog : Blog.BlogState;
}

export const reducers : ActionReducerMap<State, any> = {
  blog : Blog.blogReducer
}
