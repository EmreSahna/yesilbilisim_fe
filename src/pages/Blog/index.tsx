import { useEffect, useState } from "react";
import BlogService from "./BlogService";
import { IPost } from "./types";

import BlogNavigate from "../../common/blognavigate";
import TitleSection from "../../common/titlesection";
import { Helmet } from "react-helmet";

const Blog = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        let isDone = false;

        BlogService.getBlogs().then((res) => {
            if (isDone) return;
            setPosts(res.data);
        });

        return () => {
            isDone = true;
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Blog | Yeşil Bilişim</title>
                <meta name="description" content="Yeşil Bilişim Blog Sayfası" />
            </Helmet>

            <TitleSection title="Blog" />
            
            <div className="max-w-[1170px] mx-auto flex my-[50px] max-small:flex-col-reverse max-small:gap-[30px]">
                <div className="flex flex-col gap-6 w-[75%] max-small:w-full">
                    {posts && 
                        posts.map((blog,index) => {
                            return(
                                <div className="bg-main-gray flex items-center p-4 gap-[3%]">
                                    <div className="w-[30%] flex justify-center">
                                        <a href={"blog/"+blog.url}>
                                            <div className="overflow-hidden border">
                                                <img src={`http://localhost:8080/img/${blog.thumbnailImage}`} className="object-cover w-full h-full" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-[70%]">
                                        <h1 className="font-bold text-main-black line-clamp-2 text-[24px] max-small:text-[16px]">
                                            <a href={"blog/"+blog.url}>
                                                {blog.title}
                                            </a>
                                        </h1>
                                        <hr className="mt-2 max-small:mt-1"/>
                                        <p className="my-2 max-small:my-1 line-clamp-4 text-[16px] max-small:text-[14px]">
                                            {blog.description}
                                        </p>
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-[2px] text-main-blue">
                                                <span className="material-icons-round text-[16px] max-small:text-[14px]">schedule</span>
                                                <p className="text-[14px] font-semibold max-small:text-[12px]">{blog.createdDate}</p>    
                                            </div>
                                            <button className="text-main-blue font-semibold max-small:text-[14px]">
                                                <a href={"blog/"+blog.url}>
                                                    Devamını Oku...
                                                </a>
                                            </button>
                                        </div>    
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <BlogNavigate/>
            </div>
        </>
    );
};

export default Blog;