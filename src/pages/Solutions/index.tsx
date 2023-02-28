import { useEffect, useState } from "react";
import SolutionService from "./SolutionService";
import { ICard } from "./types";
import TitleSection from "../../common/titlesection";
import { Helmet } from "react-helmet";

const Solutions = () => {
    const [solutions, setSolutions] = useState<ICard[]>([]);

    useEffect(() => {
        SolutionService.getSolutionpage().then((res) => {
            setSolutions(res.data);
        });
    }, [])
    
    return (
        <>
            <Helmet>
                <title>Çözümlerimiz | Yeşil Bilişim</title>
                <meta name="description" content="Yeşilbilişim, müşterilerinin ihtiyaçlarını karşılamak amacıyla kaliteli ve güncel çözümler sunmaktadır." />
            </Helmet>

            <TitleSection title="Çözümlerimiz" />
            <div className="my-[50px] max-w-[1170px] mx-auto">
                <div className="my-[50px] max-small:px-4">
                    <p className="text-main-blue font-bold text-[32px]">Çözümlerimiz</p>
                    <p className="text-[18px]">Yeşilbilişim, müşterilerinin ihtiyaçlarını karşılamak amacıyla kaliteli ve güncel çözümler sunmaktadır.</p>
                </div>
                <div className="flex flex-wrap text-center justify-start">
                    {solutions &&
                        solutions.map((solutions) => (
                            <div className="w-1/5 p-2 max-small:w-[50%] max-med:w-[30%]">
                                <a href={`cozumler/${solutions.url}`}>
                                    <div className="rounded-lg bg-main-gray h-full pt-4 text-main-black">
                                        <div className="bg-main-blue w-4/12 p-2 rounded-lg flex justify-center items-center mx-auto">
                                            <img src={`http://localhost:8080/img/${solutions.icon}`} className="w-full invert" alt="" />
                                        </div>
                                        <p className="text-[20px] font-bold mt-1 mx-3">{solutions.title}</p>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Solutions;