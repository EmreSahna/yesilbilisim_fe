import http from "../../http-common";
import { IPost, IPostList } from "./types";

const getBlogs = (page?: number) => {
    return http.get<IPostList>('/blog', {
        params: {
            page: page,
            size: 8
        }
    });
};

const BlogService = {
    getBlogs
};
  
export default BlogService;