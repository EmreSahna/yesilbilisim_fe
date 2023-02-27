import { useParams } from "react-router-dom";
import BlogNavigate from "../../common/blognavigate";
import { useEffect, useState } from "react";
import BlogpageService from "./BlogpageService";
import { IDetailedPost } from "../Blog/types";
import TitleSection from "../../common/titlesection";

const Blogpage = () => {
    const [post, setPost] = useState<IDetailedPost>({} as IDetailedPost);
    const { id } = useParams();
    
    useEffect(() => {
        let isDone = false;


        BlogpageService.getBlogs(id)
        .then(res => {
            if (isDone) return;
            setPost(res.data);
            document.title = res.data.title +" | Yeşil Bilişim";
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
            <TitleSection title={post.title} />

            <div className="max-w-[1170px] mx-auto flex my-[50px]">
                <div className="w-[75%] flex flex-col gap-8" id="blog-content">
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

/*
 <p className="text-[22px] font-noto">{post.blogContent}</p>
                <ul className="list-disc pl-[1rem]">
                    <li>liste 1</li>
                    <li>liste 2</li>
                    <li>liste 3</li>
                </ul>
                <ul className="list-decimal pl-[1rem]">
                    <li>liste 1</li>
                    <li>liste 2</li>
                    <li>liste 3</li>
                </ul>
                <p className="text-[16px]"><strong>Reflection</strong>; classları, metodları, interfaceleri, fieldları, vb. özellikleri programımız çalışır haldeyken isimlerini bilmesek bile incelememize ve değiştirmemize yarayan bir Java özelliğidir.</p>
            */