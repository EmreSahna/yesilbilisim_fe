import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Hakkımızda | Yeşil Bilişim";
  }, [])
  return (
    <div>
      <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
        <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
        <ul className="my-4">
            <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
            <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
            <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
        </ul>
        <p className="text-white font-bold text-[28px]">Hakkımızda</p>
      </div>
      <div>
        <div className="flex justify-center my-12">
          <div className="mx-8">
            <div className="flex flex-col text-[36px] font-bold">
              <span className="text-black">Bireysel & Kurumsal </span>
              <span className="text-main-blue">Müşteri Memnuniyeti</span>
            </div>
            <p className="w-[455px] text-[14px]">
              Bireysel ve Kurumsal müşterilerimize en hızlı şekilde hizmet sağlamak ve Müşteri memnuniyetini en yüksek seviyede tutmayı amaçlayan yeşil bilişim günlük hayatınızı kolaylaştırmak ve teknolojiye yaptığımız yatırımdan en yüksek verimi almak için çalışıyoruz.
            </p>
          </div>
          <img src="http://localhost:8080/img/about/about_1.jpg" className="rounded-lg mx-8" alt="" />
        </div>
        <div className="flex justify-center my-12">
          <img src="http://localhost:8080/img/about/about_2.jpg" className="rounded-lg h-[200px] mx-8" alt="" />
          <div className="mx-8">
            <div className="flex flex-col text-[36px] font-bold">
              <span className="text-black">Hızlı & Uzaktan </span>
              <span className="text-main-blue">Destek</span>
            </div>
            <p className="w-[455px] text-[14px]">
              Satış,onarım ve bakım anlaşması yaparak alt yapınızın sorumluluğunu üstleniyoruz. Sorun anında Uzaktan bağlanıp anında çözüm üretiyoruz, yerinde mühaleye gerektiğinde en hızlı işlem sağlıyoruz. 
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col my-12">
          <div className="my-6">
            <div className="flex flex-col text-[36px] font-bold">
              <span className="text-black"><span className="text-main-blue">Tedarik</span> & Mutlu Müşteri</span>
            </div>
            <p className="w-[455px] text-[14px] text-center">
              Tedarik zincirinin en önemli parçası olan sipariş sonrası kargo süreçlrini en hızlı şekilde gerçekleştirmek ve Mutlu Müşteri profili oluşturmayı amaçlıyoruz.  
            </p>
          </div>
          <img src="http://localhost:8080/img/about/about_3.jpg" className="rounded-lg h-[200px] mx-8" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About;