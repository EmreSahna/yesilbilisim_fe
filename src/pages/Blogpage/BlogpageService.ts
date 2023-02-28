import http from "../../http-common";
import { IPost } from "./types";

const getBlogs = (blogId?: string) => {
    return http.get<IPost>('/blog/id/'+blogId);
};

const BlogService = {
    getBlogs
};
  
export default BlogService;