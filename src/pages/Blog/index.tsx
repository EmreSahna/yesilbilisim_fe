import { useEffect, useState } from "react";
import BlogService from "./BlogService";
import { IPost } from "./types";

import BlogNavigate from "../../common/blognavigate";

const Blog = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        let isDone = false;

        document.title = "Blog | Yeşil Bilişim";

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
            <div className="h-auto flex justify-center py-6 flex-col items-center bg-main-blue">
                <img src="http://192.168.1.169:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                </ul>
                <p className="text-white font-bold text-[28px]">Blog</p>
            </div>
            <div className="max-w-[1170px] mx-auto flex my-[50px]">
                <div className="flex flex-col gap-6 w-[75%]">
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
                                        <h1 className="font-bold text-main-black line-clamp-2 text-[24px]">
                                            <a href={"blog/"+blog.url}>
                                                {blog.title}
                                            </a>
                                        </h1>
                                        <hr className="mt-2"/>
                                        <p className="my-2 line-clamp-4 text-[16px]">
                                            {blog.description}
                                        </p>
                                        <div className="flex justify-between">
                                            <div className="flex items-center gap-[2px] text-main-blue">
                                                <span className="material-icons-round text-[16px]">schedule</span>
                                                <p className="text-[14px] font-semibold">{blog.createdDate}</p>    
                                            </div>
                                            <button className="text-main-blue font-semibold">
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

/*
const Blog = () => {
    const [infos, setInfos] = useState<IBlog>({} as IBlog);
    const [posts, setPosts] = useState<IPost[]>([]);

    const formatDate = (date: string) => {
        const day = date.split(" ")[2];
        const month = date.split(" ")[1];
        const year = date.split(" ")[5];
        return `${day} ${month} ${year}`;
    };

    useEffect(() => {
        let isDone = false;

        document.title = "Blog | Yeşil Bilişim";

        BlogService.getBlogs().then((res) => {
            if (isDone) return;
            setInfos(res.data);
            setPosts(res.data.posts);
        });

        return () => {
            isDone = true;
        };
    }, []);

    return (
        <>
            <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
                <img src="http://192.168.1.169:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                </ul>
                <p className="text-white font-bold text-[28px]">Blog</p>
            </div>
            <div className="flex justify-start items-center mt-[50px] flex-wrap max-w-[1170px] mx-auto">
                {posts &&
                    posts.map((blog, index) => {
                        return(
                            <div className="w-1/4 max-small:w-full max-med:w-1/2 p-[10px]">
                                <div className="p-[10px] h-full bg-main-gray rounded-lg">
                                    <div className="flex items-center h-[250px] bg-white rounded-md">
                                        <img src={`${blog.image}`} className="w-full max-small:w-max max-small:h-[80%] mx-auto" alt="" />
                                    </div>
                                    <div className="flex flex-col justify-start mt-[10px]">
                                        <h3 className="font-bold text-black line-clamp-2 h-[54px] text-[18px]">{blog.title}</h3>
                                        <p className="font-semibold text-black mt-[5px] text-justify line-clamp-4">{blog.description}</p>
                                    </div>
                                    <div className="flex justify-between items-center mt-[10px]">
                                        <span className="text-main-black">{formatDate(blog.pubDate)}</span>
                                        <button className="flex items-center bg-main-blue text-white py-2 px-2 rounded-[10px]" type="button">
                                            <a href={blog.link} className="flex items-center">
                                                <span className="text-[14px] font-semibold">Devamını Oku</span>
                                                <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="max-w-[1170px] mx-auto">
                <div className="bg-main-blue rounded-lg m-10 mx-auto w-fit p-4 flex text-main-gray gap-6 items-center max-small:mx-2">
                    <div>
                    <img src={infos.profileImage} className="border-2 border-main-gray rounded-[50%]" alt="" />
                    </div>
                    <div className="max-w-[180px]">
                        <h3 className="font-bold text-[20px] max-small:text-[18px]">{infos.username}</h3>
                        <p className="my-1 text-justify">Medium sayfamızı takip etmek için aşağıdaki butondan profilimize ulaşabilirsiniz.</p>
                        <button className="flex items-center bg-main-gray text-main-blue py-2 px-2 rounded-[10px]" type="button">
                            <a href={infos.profileLink} className="flex items-center">
                                <span className="text-[14px] font-semibold">Blog'a Git</span>
                                <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
*/