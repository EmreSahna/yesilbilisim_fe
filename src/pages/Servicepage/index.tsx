import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicepageService from "./ServicepageService";
import { IService } from "./types";
import TitleSection from "../../common/titlesection";
import { Helmet } from "react-helmet-async";

const Servicepage = () => {
    const { id } = useParams();
    const [service, setService] = useState<IService>({} as IService);

    useEffect(() => {
        ServicepageService.getServicepageById(id).then((res) => {
            setService(res.data);
        });
    }, [id]);

    useEffect(() => {
        if (!service.cardContent) {
            return;
        }
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(service.cardContent, "text/html");
        let blog = document.getElementById("blog-content");
        let elements = Array.from(htmlDoc.body.children);
        elements.forEach(element => {
            blog?.appendChild(element);
        });
        
    }, [service.cardContent])
    
    return (
        <>
            <Helmet>
                <title>{service.title} | Yeşil Bilişim</title>
                <meta name="description" content={service.title} />
            </Helmet>

            <TitleSection title={service.title} />
            <div className="my-[50px] max-w-[1170px] mx-auto flex flex-col gap-[30px] text-base text-justify max-small:mx-[20px]" id="blog-content">
                <h1 className="text-[24px] text-main-blue font-semibold">{service.title}</h1>
            </div>
        </>
    );
};

export default Servicepage;