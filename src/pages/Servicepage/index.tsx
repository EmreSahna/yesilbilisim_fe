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
    
    return (
        <div>
        <h1>{service.title}</h1>
        </div>
    );
};

export default Servicepage;