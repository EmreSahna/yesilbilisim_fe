import { useEffect, useState } from "react";
import SolutionService from "./SolutionService";
import { IDescriptionalImage } from "./types";

const Services = () => {
    const [solutions, setSolutions] = useState<IDescriptionalImage[]>([]);

    useEffect(() => {
        document.title = "Hizmetler | Yeşil Bilişim";
        SolutionService.getSolutionpage().then((res) => {
            setSolutions(res.data);
            console.log(res.data);
        });
    }, [])

    return (
        <>
            <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
                <img src="http://192.168.1.169:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                </ul>
                <p className="text-white font-bold text-[28px]">Çözümlerimiz</p>
            </div>
            <div className="my-[50px] max-w-[1170px] mx-auto">
                {solutions && 
                    solutions.map((solution, index) => {
                        if (index % 3 === 0) {
                        return (
                            <div id={`${index}`} className="bg-main-gray flex items-center p-12 my-8 justify-between max-small:p-4 flex-wrap">
                                <div className="w-[48%] max-small:w-full">
                                    <h1 className="font-bold text-[36px]">{solution.title}</h1>
                                    <p className="text-[14px] text-justify">{solution.description}</p>
                                </div>
                                <div className="w-[48%] max-small:w-full">
                                    <img src={`http://192.168.1.169:8080/img/${solution.folder}/${solution.filename}`} className="rounded-lg" alt="" />
                                </div>
                            </div>
                        )
                        }if(index % 3 === 1) {
                        return (
                            <div id={`${index}`} className="bg-main-black flex items-center p-12 my-8 justify-between max-small:p-4 flex-wrap">
                                <div className="w-[48%] max-small:w-full">
                                    <img src={`http://192.168.1.169:8080/img/${solution.folder}/${solution.filename}`} className="w-full rounded-lg" alt="" />
                                </div>
                                <div className="w-[48%] max-small:w-full text-main-gray">
                                    <h1 className="font-bold text-[36px]">{solution.title}</h1>
                                    <p className="text-[14px] text-justify">{solution.description}</p>
                                </div>
                            </div>
                        )
                        }if(index % 3 === 2) {
                        return (
                            <div id={`${index}`} className="bg-main-blue flex items-center p-12 my-8 justify-between max-small:p-4 flex-wrap">
                                <div className="w-[48%] max-small:w-full text-main-gray">
                                    <h1 className="font-bold text-[36px]">{solution.title}</h1>
                                    <p className="text-[14px] text-justify">{solution.description}</p>
                                </div>
                                <div className="w-[48%] max-small:w-full">
                                    <img src={`http://192.168.1.169:8080/img/${solution.folder}/${solution.filename}`} className="w-full rounded-lg" alt="" />
                                </div>
                            </div>
                        )
                        }
                    })
                }
            </div>
        </>
    );
};

export default Services;