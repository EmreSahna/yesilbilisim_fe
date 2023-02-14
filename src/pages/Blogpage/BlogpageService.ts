import http from "../../http-common";
import { IDetailedPost } from "../Blog/types";

const getBlogs = (blogId?: string) => {
    return http.get<IDetailedPost>('/blog/id/'+blogId);
};

const BlogService = {
    getBlogs
};
  
export default BlogService;