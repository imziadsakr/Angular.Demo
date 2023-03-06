import {
  BlogActions,
  BlogUnion,
} from '../actions/blog.action' ;

import { BlogData } from 'src/app/types/blog.types';

export interface BlogState {
  blogsList : BlogData[];
}

const initialState : BlogState = {
  blogsList : []
}

export function blogReducer(state : BlogState = initialState, action : BlogUnion) {
  switch(action.type) {
    case BlogActions.GetBlogsList:
      return {
        ...state,
        blogsList : action.payload.blogsList
      }
    default :
      return state;
  }
}
