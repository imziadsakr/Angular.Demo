import { Action } from "@ngrx/store";

import { BlogData } from "src/app/types/blog.types";

export enum BlogActions {
  GetBlogsList = 'GetBlogsList',
}

export class GetBlogsList implements Action {
  readonly type = BlogActions.GetBlogsList ;

  constructor( public payload : { blogsList : BlogData[] }) {}
}

export type BlogUnion = GetBlogsList ;
