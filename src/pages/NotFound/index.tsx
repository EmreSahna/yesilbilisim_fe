import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import loadAllImages from "../../utils/imagepromiser";
import Loading from "../../common/loading";

const NotFound = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadAllImages(["logo/logo_3.png"]).then(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div className="bg-main-blue py-[100px]">
            <Helmet>
                <title>404 | Yeşil Bilişim</title>
                <meta name="description" content="404 Sayfa Bulunamadı" />
            </Helmet>
            
            {loading && <Loading />}

            <div className="max-w-[1170px] mx-auto flex justify-around items-center flex-wrap">
                <img src="http://localhost:8080/img/logo/logo_3.png" className="w-1/3 max-small:w-[40%] p-2" alt="404" />
                <div className="text-white text-left w-1/2 max-small:w-full p-2">
                    <p className="text-[36px] font-bold">Sayfa Bulunamadı !</p>
                    <p className="text-justify font-semibold">Üzgünüz, ancak belirtilen sayfa bulunamadı. Bu hatanın nedeni, adresin geçersiz olması veya sayfanın internette artık mevcut olmaması olabilir. Eğer sorununuz devam ediyorsa, lütfen site yöneticisiyle iletişime geçiniz.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;