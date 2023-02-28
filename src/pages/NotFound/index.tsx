import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <div className="bg-main-blue py-[100px]">
            <Helmet>
                <title>404 | Yeşil Bilişim</title>
                <meta name="description" content="404 Sayfa Bulunamadı" />
            </Helmet>
            
            <div className="max-w-[1170px] mx-auto flex justify-around items-center flex-wrap">
                <img src="http://192.168.1.169:8080/img/logo/logo_3.png" className="w-1/3 max-small:w-[40%] p-2" alt="404" />
                <div className="text-white text-left w-1/2 max-small:w-full p-2">
                    <p className="text-[36px] font-bold">Sayfa Bulunamadı !</p>
                    <p className="text-justify font-semibold">Üzgünüz, ancak belirtilen sayfa bulunamadı. Bu hatanın nedeni, adresin geçersiz olması veya sayfanın internette artık mevcut olmaması olabilir. Eğer sorununuz devam ediyorsa, lütfen site yöneticisiyle iletişime geçiniz.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;