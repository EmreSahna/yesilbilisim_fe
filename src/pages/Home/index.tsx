import { useEffect, useState } from "react";
import DemoCarousel from "./components/slider";
import HomeService from "./HomeService";
import { IDescriptionalImage, IImage } from "./types";

const Home = () => {
  const [images, setImages] = useState<(IDescriptionalImage)[]>([]);

  useEffect(() => {
    HomeService.getHomepage().then((res) => {
      setImages(res.data);
    });
  }, []);

  return (
    <div>
      <DemoCarousel/>
      <div className="lg:my-12 my-6" id="is">
        <h1 className="font-bold lg:text-[36px] text-[24px] justify-center flex">İş Ortaklarımız</h1>
        <div className="flex items-center justify-center mt-1">
          <ul className="flex items-center justify-center flex-wrap">
            {images &&
              images.map((item, index) => {
                if(item.folder === 'companies'){
                  return (
                    <li className="lg:w-[12%] lg:p-5 p-3 w-[25%]" key={index}>
                      <img src={`http://localhost:8080/img/${item.folder}/${item.filename}`} alt="" />
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
      <div className="bg-main-gray flex md:flex-row flex-col justify-center mt-6 mb-12 lg:px-12 lg:py-0 py-6 gap-8">
        <img src="ecommerce.jpg" className="h-auto w-[500px]" alt="" />
        <div className="text-left my-auto lg:mx-0 mx-4 text-main-black">
          <h1 className="font-bold text-[36px]">Ürünlerimiz</h1>
          <p className="text-[14px] text-justify font-medium max-w-[500px]">Müşterilerimize en iyi hizmeti vermeyi amaçlıyoruz ve onların ihtiyaçlarını karşılamaya çalışıyoruz. Lütfen bizimle iletişime geçin ve kaliteli ürünlerimizi keşfedin.</p>
          <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px] mt-6" type="button">
            <a href="/urunler" className="flex items-center">
              <span className="text-[16px] font-semibold">Ürünlerimiz</span>
              <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
            </a>
          </button>
        </div>
      </div>
      <div className="my-12">
        <h1 className="font-bold text-[36px] justify-center flex">Hizmetlerimiz</h1>
        <p className="font-normal text-[14px] text-center"><span className="text-main-blue">Yesilbilisim</span>, müşterilerine geniş bir hizmet yelpazesi sunmaktadır.</p>
        <section className="flex my-4 mx-auto text-center flex-wrap max-w-[1170px]">
          {images &&
              images.map((item, index) => {
              if(item.folder === 'services'){
                return (
                  <div className="w-1/5 p-2 max-small:w-1/2 max-med:w-4/12">
                    <div className="shadow-card rounded-lg bg-white h-full pt-4">
                      <div className="bg-main-blue w-4/12 p-2 rounded-lg flex justify-center items-center mx-auto">
                        <img src={`http://localhost:8080/img/${item.folder}/${item.filename}`} className="w-full invert" alt="" />
                      </div>
                      <p className="text-black text-[20px] font-bold mt-1 mx-3">{item.title}</p>
                    </div>
                  </div>
                )
              }
            })
          }
        </section>
        <p className="font-normal text-[14px] max-w-[1170px] mx-auto text-center">Bu hizmetlerimizin yanı sıra, müşterilerimize özel olarak tasarlanmış paketler de sunmaktayız. Böylece, müşterilerimizin ihtiyaçlarına en uygun hizmetleri sunarak, onların işlemlerini daha da kolaylaştırırız. Eğer siz de en iyi hizmetleri arıyorsanız, şirketimiz ile iletişime geçebilir ve özel hizmetlerimizden yararlanabilirsiniz.</p>
        <div className="flex justify-center my-2">
          <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px]" type="button">
            <a href="/hizmetler" className="flex items-center">
              <span className="text-[16px] font-semibold">Hizmetlerimizi İncele</span>
              <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
            </a>
          </button>
        </div>
      </div>
      <div className="bg-main-gray flex md:flex-row flex-col justify-center my-12 lg:px-12 lg:py-0 py-6 gap-8">
        <div className="text-left my-auto lg:mx-0 mx-4">
          <h1 className="font-bold text-[36px]"><span className="text-main-blue">7/24&nbsp;</span>Destek Hattı</h1>
          <p className="text-[14px] text-justify max-w-[500px]">Müşterilerimize her zaman en iyi hizmeti vermeyi amaçlıyoruz ve bu nedenle sizler için 7/24 açık olan destek hattımızı kurduk. Site üzerinden bize ulaşarak, sorunlarınızı çözebilecek profesyonel ekibimizle iletişim kurabilirsiniz. Önemli olan sizlerin memnuniyeti ve bu nedenle 7/24 hizmet vermeyi sürdüreceğiz.</p>
          <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px] mt-6" type="button">
            <a href="/iletisim" className="flex items-center">
              <span className="text-[16px] font-semibold">Destek Al</span>
              <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
            </a>
          </button>
        </div>
        <img src="destek.jpg" className="h-auto w-[500px]" alt="" />
      </div>
      
      <div className="bg-main-gray flex md:flex-row flex-col justify-center my-12 lg:px-12 lg:py-0 py-6 gap-8">
        <img src="blog.jpg" className="h-auto w-[500px]" alt="" />
        <div className="text-left my-auto lg:mx-0 mx-4 text-main-black">
          <h1 className="font-bold text-[36px]">Blog'da Okumaya Değer</h1>
          <p className="text-[14px] text-justify font-medium max-w-[500px]">Yeşil bilişim olarak, müşterilerimize faydalı bilgiler sunmayı hedefliyoruz ve onların ihtiyaçlarını karşılamaya çalışıyoruz. Blog yazılarımızı okumaya devam edin ve Yeşil bilişim ile ilgili daha fazla bilgi edinin.</p>
          <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px] mt-6" type="button">
            <a href="/blog" className="flex items-center">
              <span className="text-[16px] font-semibold">Blog Yazıları</span>
              <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;