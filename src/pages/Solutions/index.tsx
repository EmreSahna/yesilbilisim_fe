import { useEffect, useState } from "react";
import SolutionService from "./SolutionService";
import { ICard } from "./types";

const Solutions = () => {
    const [solutions, setSolutions] = useState<ICard[]>([]);

    useEffect(() => {
        document.title = "Çözümlerimiz | Yeşil Bilişim";
        SolutionService.getSolutionpage().then((res) => {
            setSolutions(res.data);
        });
    }, [])
    
    return (
        <>
            <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
                <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                </ul>
                <p className="text-white font-bold text-[28px]">Çözümlerimiz</p>
            </div>
            <div className="my-[50px] max-w-[1170px] mx-auto">
                <div className="my-[50px]">
                    <p className="text-main-blue font-bold text-[32px]">Çözümlerimiz</p>
                    <p className="text-[18px]">Yeşilbilişim, müşterilerinin ihtiyaçlarını karşılamak amacıyla kaliteli ve güncel çözümler sunmaktadır.</p>
                </div>
                <div className="flex flex-wrap text-center justify-start">
                    {solutions &&
                        solutions.map((solutions) => (
                            <div className="w-1/5 p-2">
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