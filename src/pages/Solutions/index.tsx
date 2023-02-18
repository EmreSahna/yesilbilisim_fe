import { useEffect, useState } from "react";

const Solutions = () => {
    useEffect(() => {
        document.title = "Çözümlerimiz | Yeşil Bilişim";
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
                    <div className="w-1/5 p-2">
                        <a href="">
                            <div className="rounded-lg bg-main-gray h-full pt-4 text-main-black">
                                <div className="bg-main-blue w-4/12 p-2 rounded-lg flex justify-center items-center mx-auto">
                                    <img src="http://localhost:8080/img/services/hizmetler_9.png" className="w-full invert" alt="" />
                                </div>
                                <p className="text-[20px] font-bold mt-1 mx-3">Web Güvenliği Çözümleri</p>
                            </div>
                        </a>
                    </div>
                    <div className="w-1/5 p-2">
                        <a href="">
                            <div className="rounded-lg bg-main-gray h-full pt-4 text-main-black">
                                <div className="bg-main-blue w-4/12 p-2 rounded-lg flex justify-center items-center mx-auto">
                                    <img src="http://localhost:8080/img/services/hizmetler_10.png" className="w-full invert" alt="" />
                                </div>
                                <p className="text-[20px] font-bold mt-1 mx-3">E-posta Güvenliği Çözümleri</p>
                            </div>
                        </a>
                    </div>
                    <div className="w-1/5 p-2">
                        <a href="">
                            <div className="rounded-lg bg-main-gray h-full pt-4 text-main-black">
                                <div className="bg-main-blue w-4/12 p-2 rounded-lg flex justify-center items-center mx-auto">
                                    <img src="http://localhost:8080/img/services/hizmetler_1.png" className="w-full invert" alt="" />
                                </div>
                                <p className="text-[20px] font-bold mt-1 mx-3">Ağ ve Güvenlik Çözümleri</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solutions;

/*
{solutions && 
                    solutions.map((solution, index) => {
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
                    })
                }
                */