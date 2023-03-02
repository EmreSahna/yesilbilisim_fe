import { useEffect, useState } from "react";
import { IBlogNavigator } from "./types";
import CommonService from "./CommonService";

const BlogNavigate = () => {

    const [blogList, setBlogList] = useState<IBlogNavigator[]>([]);

    useEffect(() => {
        CommonService.blogNavigator().then((res) => {
            setBlogList(res.data);
        });
    }, []);

    return (
        <div className="w-[25%] max-small:w-full">
            <div className="bg-white flex flex-col shadow-card rounded-md">
                <div className="flex items-center m-[12px] gap-3">
                    <span className="material-icons text-main-blue">rss_feed</span>
                    <h1 className="font-semibold text-center text-[22px] text-main-blue">Öne Çıkanlar</h1>
                </div>
                <div className="border-b-2 border-main-blue"></div>
                {blogList && blogList.map((item, index) => (
                    <>
                    <a href={"blog/"+item.url} className="m-[20px]">
                        <div className="flex font-semibold items-center justify-between" key={index}>
                            <div className="overflow-hidden h-full w-[25%]">
                                <img src={`http://localhost:8080/img/${item.thumbnailImage}`} className="object-cover w-full h-full" alt="" />
                            </div>
                            <div className="w-[65%]">
                                <p className="text-[16px]">{item.title}</p>
                                <p className="font-extralight">{item.createdDate}</p>
                            </div>
                        </div>
                    </a>
                    <div className="border-b-2 border-main-gray"></div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default BlogNavigate;