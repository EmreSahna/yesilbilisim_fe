import { useParams } from "react-router-dom";
import BlogNavigate from "../../common/blognavigate";
import { useEffect, useState } from "react";
import BlogpageService from "./BlogpageService";
import TitleSection from "../../common/titlesection";
import { Helmet } from "react-helmet-async";
import { IPost } from "./types";

const Blogpage = () => {
    const [post, setPost] = useState<IPost>({
        title: "Yükleniyor... | Yeşil Bilişim",
        description: "Blog sayfası yükleniyor...",
        blogContent: "",
        createdDate: "",
    });
    const { id } = useParams();
    
    useEffect(() => {
        let isDone = false;

        BlogpageService.getBlogs(id)
        .then(res => {
            if (isDone) return;
            setPost(res.data);
        })

        return () => {
            isDone = true;
        };
    }, [id]);

    useEffect(() => {
        if (!post.blogContent) {
            return;
        }
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(post.blogContent, "text/html");
        let blog = document.getElementById("blog-content");
        let elements = Array.from(htmlDoc.body.children);
        elements.forEach(element => {
            blog?.appendChild(element);
        });
        
    }, [post.blogContent])

    return (
        <>
            {post && (
                <Helmet>
                    <title>{post.title} | Yeşil Bilişim</title>
                    <meta name="description" content={post.description} />
                </Helmet>
            )}

            <TitleSection title={post.title} />

            <div className="max-w-[1170px] mx-auto flex my-[50px] max-small:flex-col max-small:gap-[30px] max-small:mx-[20px]">
                <div className="w-[75%] flex flex-col gap-8 max-small:w-full" id="blog-content">
                    <div className="flex items-center text-main-blue gap-[2px]">
                        <p className="material-icons-round text-[16px]">schedule</p>
                        <h2 className="text-[14px] font-semibold">{post.createdDate}</h2>
                    </div>
                    <p className="text-[22px] font-noto">{post.description}</p>
                </div>
                <BlogNavigate />
            </div>
        </>
    )
}

export default Blogpage;