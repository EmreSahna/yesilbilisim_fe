import { useEffect, useState } from "react";
import BlogService from "./BlogService";
import { IPost } from "./types";

import BlogNavigate from "../../common/blognavigate";
import TitleSection from "../../common/titlesection";
import { Helmet } from "react-helmet";

const Blog = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currPage, setCurrPage] = useState<number>(1);
    useEffect(() => {
        let isDone = false;

        BlogService.getBlogs(currPage-1).then((res) => {
            if (isDone) return;
            setPosts(res.data.blogResponses);
            setTotalPages(res.data.totalPages);
        });

        return () => {
            isDone = true;
        };
    }, []);

    const changePage = (page: number) => {
        setCurrPage(page);
        BlogService.getBlogs(page-1).then((res) => {
            setPosts(res.data.blogResponses);
            setTotalPages(res.data.totalPages);
        });
    }

    const pageBoxes = () => {
        let pageBoxes = [];
        for(let i = 1; i < totalPages+1; i++){
            if(i === currPage){
                pageBoxes.push(
                    <button onClick={() => changePage(i)} className="w-[40px] h-[40px] font-bold border-2 border-main-blue text-white rounded-md flex justify-center items-center bg-main-blue">
                        <span className="text-[20px]">{i}</span>
                    </button>
                );
            }else{
                pageBoxes.push(
                    <button onClick={() => changePage(i)} className="w-[40px] h-[40px] font-bold border-2 border-main-gray-2 text-main-blue rounded-md flex justify-center items-center">
                        <span className="text-[20px]">{i}</span>
                    </button>
                );
            }
        }
        return pageBoxes;
    }

    return (
        <>
            <Helmet>
                <title>Blog | Yeşil Bilişim</title>
                <meta name="description" content="Yeşil Bilişim Blog Sayfası" />
            </Helmet>

            <TitleSection title="Blog" />
            
            <div className="max-w-[1170px] justify-between mx-auto flex my-[50px] max-small:flex-col-reverse max-small:gap-[30px]">
                <div className="flex gap-[20px] w-[75%] max-small:w-full flex-wrap">
                    {posts && 
                        posts.map((blog,index) => {
                            return(
                                <article className="w-[47.5%] shadow-card rounded-md h-[300px]">
                                    <a href={"blog/"+blog.url} className="relative group">
                                        <div className="flex absolute top-0 bg-[rgba(8,112,176,.7)] rounded-br-md rounded-tl-md px-1 z-10">
                                            <div className="flex gap-1 items-center text-white">
                                                <span className="material-icons-round text-[16px] max-small:text-[14px]">schedule</span>
                                                <p className="text-[16px] font-semibold max-small:text-[12px]">{blog.createdDate}</p>    
                                            </div>
                                        </div>
                                        <div className="absolute hidden group-hover:inline left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
                                            <span className="material-icons-outlined text-white text-[28px] bg-[rgba(8,112,176,.5)] rounded-[50%] p-1">zoom_in</span>
                                        </div>
                                        <div className="overflow-hidden h-full group-hover:bg-main-black rounded-md">
                                            <img src={`http://localhost:8080/img/${blog.thumbnailImage}`} className="object-cover w-full h-full rounded-md group-hover:rotate-[5deg] group-hover:opacity-50 group-hover:scale-[1.2] transition" alt="" />
                                        </div>
                                        <div className="absolute bottom-0 bg-[rgba(8,112,176,.75)] backdrop-blur-sm p-2 rounded-b-md w-full">
                                            <h1 className="font-bold text-white text-[24px] max-small:text-[16px]">
                                                {blog.title}
                                            </h1>
                                        </div>
                                    </a>
                                </article>
                            )
                        })
                    }
                </div>
                <BlogNavigate/>
            </div>
            <div className="flex justify-center mx-auto items-center my-[50px]">
                <ul className="flex gap-[10px]">
                    {pageBoxes()}
                </ul>
            </div>
        </>
    );
};

export default Blog;