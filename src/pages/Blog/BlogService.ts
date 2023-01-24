import http from "../../http-common";
import { IBlog } from "./types";

const getBlogs = () => {
    return http.get<IBlog>('/blog/medium');
};

const BlogService = {
    getBlogs
};
  
export default BlogService;