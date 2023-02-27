import { useEffect, useState } from "react";
import SolutionService from "./ServiceService";
import { ICard } from "./types";
import TitleSection from "../../common/titlesection";

const Services = () => {
    const [services, setServices] = useState<ICard[]>([]);

    useEffect(() => {
        document.title = "Hizmetlerimiz | Yeşil Bilişim";
        SolutionService.getSolutionpage().then((res) => {
            setServices(res.data);
        });
    }, [])

    return (
        <>
            <TitleSection title="Hizmetlerimiz" />
            <div className="my-[50px] max-w-[1170px] mx-auto">
                <div className="my-[50px] max-small:px-4">
                    <p className="text-main-blue font-bold text-[32px]">Hizmetlerimiz</p>
                    <p className="text-[18px]">Yeşilbilişim olarak müşterilerimize çeşitli bilişim hizmetleri sunuyoruz.</p>
                </div>
                <div className="flex flex-wrap text-center justify-start">
                    {services &&
                        services.map((services) => (
                            <div className="w-1/5 p-2 max-small:w-[50%] max-med:w-[30%]">
                                <a href={`hizmetler/${services.url}`}>
                                    <div className="rounded-lg bg-main-gray h-full pt-4 text-main-black">
                                        <div className="bg-main-blue w-4/12 p-2 rounded-lg flex justify-center items-center mx-auto">
                                            <img src={`http://localhost:8080/img/${services.icon}`} className="w-full invert" alt="" />
                                        </div>
                                        <p className="text-[20px] font-bold mt-1 mx-3">{services.title}</p>
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

export default Services;