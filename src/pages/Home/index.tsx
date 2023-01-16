import { useEffect, useState } from "react";
import DemoCarousel from "./components/slider";

const Home = () => {
  return (
    <div>
      <DemoCarousel/>
      <div className="my-12" id="is">
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
      <div className="my-12">
        <h1 className="font-bold text-[36px] justify-center flex">Hizmetlerimiz</h1>
        <p className="font-normal text-[14px] justify-center flex"><span className="text-main-blue">Yesilbilisim</span>, müşterilerine geniş bir hizmet yelpazesi sunmaktadır.</p>
        <section className="flex justify-center my-4 text-center flex-wrap">
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_1.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[1.25vw] font-bold mt-1 mx-3">Ağ ve Güvenlik Çözümleri</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_2.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Veri Yönetimi Güvenliği</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_3.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Bulut Bilişim Hizmetleri</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_4.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Web Tasarım ve Geliştirme</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_5.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Bilişim Güvenliği Hizmetleri</p>
          </div>
        </section>
        <section className="flex justify-center my-4 text-center">
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_6.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">İşletme Yazılımı Geliştirme</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_7.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Grafik Tasarım</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_8.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Pazarlama Danışmanlığı</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_9.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">Web Güvenliği Çözümleri</p>
          </div>
          <div className="w-[220px] h-[160px] shadow-card rounded-lg bg-white mx-2 py-4">
            <div className="bg-main-blue w-[80px] h-[80px] rounded-lg flex justify-center items-center m-auto">
              <img src="hizmetler_10.png" className="w-[60px] invert" alt="" />
            </div>
            <p className="text-black text-[18px] font-bold mt-1 mx-3">E-posta Güvenliği Çözümleri</p>
          </div>
        </section>
        <p className="font-normal text-[14px] w-10/12 mx-auto">Bu hizmetlerimizin yanı sıra, müşterilerimize özel olarak tasarlanmış paketler de sunmaktayız. Böylece, müşterilerimizin ihtiyaçlarına en uygun hizmetleri sunarak, onların işlemlerini daha da kolaylaştırırız. Eğer siz de en iyi hizmetleri arıyorsanız, şirketimiz ile iletişime geçebilir ve özel hizmetlerimizden yararlanabilirsiniz.</p>
        <div className="flex justify-center my-2">
          <button className="flex items-center bg-main-blue text-white py-1 px-4 rounded-[10px]" type="button">
            <a href="/hizmetler" className="flex items-center">
            <span className="text-[16px] font-semibold">Hizmetlerimizi İncele</span>
            <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[20px] ml-2 mt-1">¥</i>
            </a>
          </button>
        </div>
      </div>
      <div className="bg-main-gray flex md:flex-row flex-col justify-center p-12 my-12">
        <div className="text-left">
          <h1 className="font-bold text-[36px]"><span className="text-main-blue">7/24&nbsp;</span>Destek Hattı</h1>
          <p className="text-[14px] text-justify max-w-[500px]">Müşterilerimize her zaman en iyi hizmeti vermeyi amaçlıyoruz ve bu nedenle sizler için 7/24 açık olan destek hattımızı kurduk. Site üzerinden bize ulaşarak, sorunlarınızı çözebilecek profesyonel ekibimizle iletişim kurabilirsiniz. Önemli olan sizlerin memnuniyeti ve bu nedenle 7/24 hizmet vermeyi sürdüreceğiz.</p>
          <button className="flex items-center bg-main-blue text-white py-1 px-4 rounded-[10px] mt-6" type="button">
            <a href="/iletisim" className="flex items-center">
              <span className="text-[16px] font-semibold">Destek Al</span>
              <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[20px] ml-2 mt-1">¥</i>
            </a>
          </button>
        </div>
        <img src="destek_1.jpg" className="h-auto w-full max-w-[350px] rounded-lg my-3 mx-auto md:mx-8" alt="" />
      </div>
      <div className="my-12 flex text-white">
        <div className="bg-main-blue w-1/2 px-4 py-16">
          <h1 className="font-bold text-[36px] text-center">Ürünlerimiz</h1>
          <p className="font-semibold text-[18px] text-center"><span className="text-main-black">Yesilbilisim</span>, sizlere en kaliteli ürünleri sunmayı hedeflemektedir.</p>
          <img src="ecommerce.jpg" className="rounded-xl h-[200px] border-2 border-main-gray mx-auto my-4" alt="" />
          <p className="text-[18px] text-justify font-semibold">Müşterilerimize en iyi hizmeti vermeyi amaçlıyoruz ve onların ihtiyaçlarını karşılamaya çalışıyoruz. Lütfen bizimle iletişime geçin ve kaliteli ürünlerimizi keşfedin.</p>
          <button className="flex items-center mx-auto bg-main-black text-white py-1 px-4 rounded-[10px] my-4" type="button">
            <a href="/urunler" className="flex items-center">
              <p className="text-[16px] font-semibold">Ürünlerimiz</p>
              <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[20px] ml-2 mt-1">¥</i>
            </a>
          </button>
        </div>
        <div className="bg-main-black w-1/2 px-4 py-8 items-center flex flex-wrap justify-center">
          <h1 className="font-bold text-[36px] justify-center flex">Blog'da Okumaya Değer</h1>
          <p className="text-justify text-[18px] mx-auto font-semibold"><span className="text-main-blue">Yesilbilisim&nbsp;</span>olarak sizlere en yeni ve ilgi çekici blog yazılarımızı sunuyoruz. Bu bölümde, yazılım gibi konuları ele alan yazılarımızı bulabilirsiniz.</p>
          <img src="blog.jpg" className="h-[200px] rounded-xl border-2 border-main-gray mx-auto my-4" alt="" />
          <p className="text-[18px] font-semibold text-justify"><span className="text-main-blue">Yesilbilisim&nbsp;</span>olarak, müşterilerimize faydalı bilgiler sunmayı hedefliyoruz ve onların ihtiyaçlarını karşılamaya çalışıyoruz. Blog yazılarımızı okumaya devam edin ve <span className="text-main-blue">Yesilbilisim</span> ile ilgili daha fazla bilgi edinin.</p>
          <button className="mx-auto flex items-center bg-main-blue text-white py-1 px-4 rounded-[10px] my-3" type="button">
            <a href="/blog" className="flex items-center">
            <span className="text-[16px] font-semibold">Blog Yazıları</span>
            <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[20px] ml-2 mt-1">¥</i>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;