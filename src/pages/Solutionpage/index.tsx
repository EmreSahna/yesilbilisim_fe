import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SolutionpageService from "./SolutionpageService";
import { ISolution } from "./types";
import TitleSection from "../../common/titlesection";
import { Helmet } from "react-helmet-async";
import Loading from "../../common/loading";

const Solutionpage = () => {
    const { id } = useParams();
    const [solution, setSolution] = useState<ISolution>({
        title: "",
        cardContent: "",
    });
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        SolutionpageService.getSolutionpageById(id).then((res) => {
            setSolution(res.data);
            setLoading(false);
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
            <Helmet>
                <title>{solution.title} | Yeşil Bilişim</title>
                <meta name="description" content={solution.title} />
            </Helmet>

            {loading && <Loading/>}

            <TitleSection title={solution.title} />
            <div className="py-[80px] max-w-[1170px] mx-auto flex flex-col gap-[30px] text-base text-justify max-small:mx-[20px]" id="blog-content">
                <h1 className="text-[24px] text-main-blue font-semibold">{solution.title}</h1>
            </div>
        </>
    );
};

export default Solutionpage;