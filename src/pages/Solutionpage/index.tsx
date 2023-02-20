import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SolutionpageService from "./SolutionpageService";
import { ISolution } from "./types";

const Solutionpage = () => {
    const { id } = useParams();
    const [solution, setSolution] = useState<ISolution>({} as ISolution);
    
    useEffect(() => {
        SolutionpageService.getSolutionpageById(id).then((res) => {
            setSolution(res.data);
            document.title = res.data.title +" | Yeşil Bilişim";
        });
    }, [id]);

    useEffect(() => {
        if (!solution.cardContent) {
            return;
        }
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(solution.cardContent, "text/html");
        let blog = document.getElementById("blog-content");
        let elements = Array.from(htmlDoc.body.children);
        elements.forEach(element => {
            blog?.appendChild(element);
        });
        
    }, [solution.cardContent])
    
    return (
        <>
            <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
                <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                </ul>
                <p className="text-white font-bold text-[28px]">{solution.title}</p>
            </div>
            <div className="my-[50px] max-w-[1170px] mx-auto flex flex-col gap-[30px] text-base text-justify" id="blog-content">
                <h1 className="text-[24px] text-main-blue font-semibold">{solution.title}</h1>
            </div>
        </>
    );
};

export default Solutionpage;