import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Hakkımızda | Yeşil Bilişim";
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
        <p className="text-white font-bold text-[28px]">Hakkımızda</p>
      </div>
      <div className="max-w-[1170px] mx-auto my-[50px] flex flex-col gap-12">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="flex flex-col w-1/2 max-med:w-full mx-4">
            <div className="flex flex-col text-[36px] font-bold">
              <span className="text-black">Bireysel & Kurumsal </span>
              <span className="text-main-blue">Müşteri Memnuniyeti</span>
            </div>
            <p className="text-[14px] text-justify">
              Bireysel ve Kurumsal müşterilerimize en hızlı şekilde hizmet sağlamak ve Müşteri memnuniyetini en yüksek seviyede tutmayı amaçlayan yeşil bilişim günlük hayatınızı kolaylaştırmak ve teknolojiye yaptığımız yatırımdan en yüksek verimi almak için çalışıyoruz.
            </p>
          </div>
          <img src="http://localhost:8080/img/about/about_1.jpg" className="w-[25%] max-med:w-[70%] h-full rounded-lg" alt="" />
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <img src="http://localhost:8080/img/about/about_2.jpg" className="w-[25%] max-med:w-[70%] h-full rounded-lg" alt="" />
          <div className="flex flex-col w-1/2 max-med:w-full mx-4">
            <div className="flex flex-col text-[36px] font-bold">
              <span className="text-black">Hızlı & Uzaktan </span>
              <span className="text-main-blue">Destek</span>
            </div>
            <p className="text-[14px] text-justify">
              Satış,onarım ve bakım anlaşması yaparak alt yapınızın sorumluluğunu üstleniyoruz. Sorun anında Uzaktan bağlanıp anında çözüm üretiyoruz, yerinde mühaleye gerektiğinde en hızlı işlem sağlıyoruz. 
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-8">
          <div className="flex flex-col items-center w-1/2 max-med:w-full px-4">
            <div className="flex flex-col text-[36px] font-bold">
              <span className="text-black"><span className="text-main-blue">Tedarik</span> & Mutlu Müşteri</span>
            </div>
            <p className="text-[14px] text-justify">
              Tedarik zincirinin en önemli parçası olan sipariş sonrası kargo süreçlrini en hızlı şekilde gerçekleştirmek ve Mutlu Müşteri profili oluşturmayı amaçlıyoruz.  
            </p>
          </div>
          <img src="http://localhost:8080/img/about/about_3.jpg" className="w-[25%] max-med:w-[70%] h-full rounded-lg" alt="" />
        </div>
      </div>
    </>
  )
}

export default About;