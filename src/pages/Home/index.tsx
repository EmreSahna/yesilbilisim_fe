import { useEffect, useState } from "react";
import DemoCarousel from "./components/slider";

const Home = () => {
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
      <div className="my-8">
        <h1 className="font-bold text-[36px] justify-center flex">Hizmetlerimiz</h1>
        <p className="font-normal text-[14px] justify-center flex"><span className="text-main-blue">Yesilbilisim</span>, müşterilerine geniş bir hizmet yelpazesi sunmaktadır.</p>
        <section className="flex justify-center my-4 text-center">
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_1.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Ağ ve Güvenlik Çözümleri</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_2.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Veri Yönetimi Güvenliği</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_3.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Bulut Bilişim Hizmetleri</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_4.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Web Tasarım ve Geliştirme</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_5.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Bilişim Güvenliği Hizmetleri</p>
          </div>
        </section>
        <section className="flex justify-center my-4 text-center">
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_6.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">İşletme Yazılımı Geliştirme</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_7.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Grafik Tasarım</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_8.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Pazarlama Danışmanlığı</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_9.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Web Güvenliği Çözümleri</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_10.png" className="w-[60px]" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">E-posta Güvenliği Çözümleri</p>
          </div>
        </section>
        <p className="font-normal text-[14px] w-10/12 mx-auto">Bu hizmetlerimizin yanı sıra, müşterilerimize özel olarak tasarlanmış paketler de sunmaktayız. Böylece, müşterilerimizin ihtiyaçlarına en uygun hizmetleri sunarak, onların işlemlerini daha da kolaylaştırırız. Eğer siz de en iyi hizmetleri arıyorsanız, şirketimiz ile iletişime geçebilir ve özel hizmetlerimizden yararlanabilirsiniz.</p>
        <div className="flex justify-center my-2">
          <button className="flex items-center bg-main-blue text-white py-1 px-4 rounded-[10px]" type="button">
            <a href="/iletisim" className="flex items-center">
            <span className="text-[16px] font-semibold">İletişime Geç</span>
            <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[20px] ml-2 mt-1">¥</i>
            </a>
          </button>
        </div>
      </div>
      <div className="my-8">
        <h1 className="font-bold text-[36px] justify-center flex">Ürünlerimiz</h1>
        <p className="font-normal text-[14px] justify-center flex"><span className="text-main-blue">Yesilbilisim</span>, sizlere en kaliteli ürünleri sunmayı hedeflemektedir.</p>
        <section className="flex justify-center my-4">
          <div className="w-[275px] h-[250px] shadow-card rounded-lg bg-white mx-2 py-2.5">
            <div className="bg-white w-[255px] h-[120px] rounded-lg flex justify-center items-center m-auto bg-[url('../public/urun_1.jfif')] bg-contain bg-no-repeat bg-center"></div>
            <p className="text-black text-[14px] mt-1 mx-3">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</p>
            <p className="text-black text-[22px] font-bold mt-2 mx-3">13.999,00TL</p>
          </div>
          <div className="w-[275px] h-[250px] shadow-card rounded-lg bg-white mx-2 py-2.5">
            <div className="bg-white w-[255px] h-[120px] rounded-lg flex justify-center items-center m-auto bg-[url('../public/urun_1.jfif')] bg-contain bg-no-repeat bg-center"></div>
            <p className="text-black text-[14px] mt-1 mx-3">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</p>
            <p className="text-black text-[22px] font-bold mt-2 mx-3">13.999,00TL</p>
          </div>
          <div className="w-[275px] h-[250px] shadow-card rounded-lg bg-white mx-2 py-2.5">
            <div className="bg-white w-[255px] h-[120px] rounded-lg flex justify-center items-center m-auto bg-[url('../public/urun_1.jfif')] bg-contain bg-no-repeat bg-center"></div>
            <p className="text-black text-[14px] mt-1 mx-3">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</p>
            <p className="text-black text-[22px] font-bold mt-2 mx-3">13.999,00TL</p>
          </div>
          <div className="w-[275px] h-[250px] shadow-card rounded-lg bg-white mx-2 py-2.5">
            <div className="bg-white w-[255px] h-[120px] rounded-lg flex justify-center items-center m-auto bg-[url('../public/urun_1.jfif')] bg-contain bg-no-repeat bg-center"></div>
            <p className="text-black text-[14px] mt-1 mx-3">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</p>
            <p className="text-black text-[22px] font-bold mt-2 mx-3">13.999,00TL</p>
          </div>
        </section>
        <div className="flex justify-center">
          <p className="text-[14px] w-6/12 text-center">Müşterilerimize en iyi hizmeti vermeyi amaçlıyoruz ve onların ihtiyaçlarını karşılamaya çalışıyoruz. Lütfen bizimle iletişime geçin ve kaliteli ürünlerimizi keşfedin.</p>
          <button className="flex items-center bg-main-black text-white py-1 px-4 rounded-[10px]" type="button">
            <a href="/iletisim" className="flex items-center">
            <span className="text-[16px] font-semibold">Daha Fazla Ürün Göster</span>
            <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[20px] ml-2 mt-1">¥</i>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;