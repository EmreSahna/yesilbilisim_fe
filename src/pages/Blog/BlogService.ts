import http from "../../http-common";
import { IPost } from "./types";

const getBlogs = () => {
    return http.get<IPost[]>('/blog/id/all');
};

const BlogService = {
    getBlogs
};
  
export default BlogService;