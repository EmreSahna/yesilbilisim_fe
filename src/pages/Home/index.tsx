import { useEffect, useState } from "react";
import DemoCarousel from "./components/slider";
import { getLogos } from "./hooks/get_logos";
import { IImage } from "./model";

const Home = () => {
  const [images, setImages] = useState([] as IImage[]);

  useEffect(() => {
    getLogos().then((res) => {
      setImages(res as IImage[]);
    });
  }, []);

  console.log(images);  

  return (
    <div>
      <DemoCarousel/>
      <div className="my-8">
        <h1 className="font-bold text-[36px] justify-center flex">İş Ortaklarımız</h1>
        <div className="flex items-center justify-center mt-4">
            <ul className="flex items-center">
                <li className="mx-6">
                    <img src="http://localhost:8080/img/companies/cisco.png" className='h-[50px] w-auto' alt="" />
                </li>
                <li className="mx-6">
                    <img src="http://localhost:8080/img/companies/trendmicro.png" className='h-[65px] w-auto' alt="" />
                </li>
                <li className="mx-6">
                    <img src="http://localhost:8080/img/companies/microsoft.png" className='h-[65px] w-auto' alt="" />
                </li>
                <li className="mx-6">
                    <img src="http://localhost:8080/img/companies/mcafee.png" className='h-[20px] w-auto' alt="" />
                </li>
                <li className="mx-6">
                    <img src="http://localhost:8080/img/companies/lenovo.png" className='h-[20px] w-auto' alt="" />
                </li>
                <li className="mx-6">
                    <img src="http://localhost:8080/img/companies/huawei.png" className='h-[50px] w-auto' alt="" />
                </li>
                <li className="mx-6">
                    <img src="http://localhost:8080/img/companies/ibm.png" className='h-[25px] w-auto' alt="" />
                </li>
            </ul>
        </div>
      </div>
      <div>
        <div className="text-center">
            <h1 className="font-bold text-[36px] block">Hizmetlerimiz</h1>
            <p className="font-normal text-[14px]"><span className="text-main-blue">Yesilbilisim</span>, müşterilerine geniş bir hizmet yelpazesi sunmaktadır.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;