import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicepageService from "./ServicepageService";
import { IService } from "./types";

const Servicepage = () => {
    const { id } = useParams();
    const [service, setService] = useState<IService>({} as IService);

    useEffect(() => {
        ServicepageService.getServicepageById(id).then((res) => {
            setService(res.data);
            document.title = res.data.title +" | Yeşil Bilişim";
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
            <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
                <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                </ul>
                <p className="text-white font-bold text-[28px]">{service.title}</p>
            </div>
            <div className="my-[50px] max-w-[1170px] mx-auto flex flex-col gap-[30px] text-base text-justify" id="blog-content">
                <h1 className="text-[24px] text-main-blue font-semibold">{service.title}</h1>
            </div>
        </>
    );
};

export default Servicepage;