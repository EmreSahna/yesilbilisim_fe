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
        <div className="w-[25%] px-4 max-small:w-full">
            <div className="bg-main-gray py-2 px-1 flex flex-col gap-2">
                <h1 className="font-semibold text-center text-[20px] text-main-blue">Son Yazılarımız</h1>
                {blogList && blogList.map((item, index) => (
                    <a href={"blog/"+item.url}>
                        <div className="flex font-semibold items-start" key={index}>
                            <span className="material-icons-round text-[24px] text-main-blue">navigate_next</span>
                            <p className="line-clamp-2 text-[16px]">{item.title}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default BlogNavigate;