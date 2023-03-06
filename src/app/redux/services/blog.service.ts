import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({providedIn : 'root'})

export class BlogService{
  constructor() {}

  getBlogsList() {
    return axios.get('http://localhost:5050/api/blog/blogsList') ;
  }
}
