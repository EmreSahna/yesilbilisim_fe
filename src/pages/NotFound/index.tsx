import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
        document.title = "Sayfa Bulunamadı | Yeşil Bilişim";
    }, [])
    return (
        <div className="bg-main-blue flex justify-end h-screen items-center">
            <img src="http://localhost:8080/img/logo/logo_3.png" className="absolute left-[190px] items-center w-[300px] " alt="404" />
            <div className="text-white w-1/2 z-10 text-left mr-16">
                <p className="text-[36px] font-bold">Sayfa Bulunamadı !</p>
                <p className="text-md font-semibold">Üzgünüz, ancak belirtilen sayfa bulunamadı. Bu hatanın nedeni, adresin geçersiz olması veya sayfanın internette artık mevcut olmaması olabilir. Eğer sorununuz devam ediyorsa, lütfen site yöneticisiyle iletişime geçiniz.</p>
            </div>
        </div>
    );
};

export default NotFound;