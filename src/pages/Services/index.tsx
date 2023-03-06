import { useEffect, useState } from "react";
import SolutionService from "./ServiceService";
import { ICard } from "./types";
import TitleSection from "../../common/titlesection";
import { Helmet } from "react-helmet";
import loadAllImages from "../../utils/imagepromiser";
import Loading from "../../common/loading";

const Services = () => {
    const [services, setServices] = useState<ICard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [allImages, setAllImages] = useState<string[]>([]);

    useEffect(() => {
        SolutionService.getSolutionpage().then((res) => {
            setServices(res.data);
            allImages.push(...res.data.map((item) => item.icon));
            loadAllImages(allImages).then(() => {
                setLoading(false);
            });
        });
    }, [])

    return (
        <>
            <Helmet>
                <title>Hizmetlerimiz | Yeşil Bilişim</title>
                <meta name="description" content="Yeşilbilişim olarak müşterilerimize çeşitli bilişim hizmetleri sunuyoruz." />
            </Helmet>

            <TitleSection title="Hizmetlerimiz" />

            {loading && <Loading />}

            <div className="pt-[40px] pb-[80px] max-w-[1170px] mx-auto">
                <div className="my-[50px] max-small:px-4">
                    <p className="text-main-blue font-bold text-[32px]">Hizmetlerimiz</p>
                    <p className="text-[18px]">Yeşilbilişim olarak müşterilerimize çeşitli bilişim hizmetleri sunuyoruz.</p>
                </div>
                <div className="flex flex-wrap text-center justify-start">
                    {services &&
                        services.map((item, index) => (
                            <div className="w-1/5 p-2 max-small:w-1/2 max-med:w-4/12" key={index}>
                            <a href={`hizmetler/${item.url}`}>
                              <div className="shadow-card rounded-lg bg-white h-full pt-4 group">
                                <div className="bg-main-blue w-4/12 group-hover:scale-[1.15] transform transition duration-300 p-2 rounded-lg flex justify-center items-center mx-auto">
                                  <img src={`http://localhost:8080/img/${item.icon}`} className="w-full invert" alt="" />
                                </div>
                                <p className="text-black text-[20px] font-bold mt-1 mx-3">{item.title}</p>
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