import { useEffect, useState } from "react";
import BlogService from "./BlogService";
import { IBlog, IPost } from "./types";

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
                <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
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