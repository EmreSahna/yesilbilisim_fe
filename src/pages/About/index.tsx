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
      <div className="max-w-[1170px] mx-auto flex flex-col my-[50px]">
        <p className="font-bold text-main-blue text-[32px]">Yeşilbilişim<span className="text-main-black"> Hakkında</span></p>
        <div className="flex flex-row">
          <div className="flex flex-col justify-evenly text-justify pr-4">
            <p className="text-[18px]"><span className="text-main-blue font-semibold">Yeşilbilişim</span>, 2021 yılında kurulmuş bir şirkettir. Bizim amacımız müşterilerimize en iyi hizmeti sunmaktır. Bu nedenle, <span className="font-semibold">ağ ve güvenlik</span>, <span className="font-semibold">web tasarım ve geliştirme</span>, <span className="font-semibold">ürün satışı</span> gibi alanlarda uzmanlaşmış profesyonel bir ekibimiz bulunmaktadır.</p>
            <p className="text-[18px]">Ekibimiz, sektörde uzun yıllardır bulunan deneyimli ve uzman kişilerden oluşmaktadır. Her bir çalışanımız, müşterilerimize en iyi hizmeti sunma konusunda motivasyonlu ve hedef odaklıdır. Bizimle çalışan müşterilerimiz, profesyonel ve kaliteli hizmet alacaklarından emin olabilirler.</p>
          </div>
          <img src="http://localhost:8080/img/about/about_1.jpg" alt="about" className="w-[30%]" />
        </div>
        <p className="text-[18px] text-justify my-4"><span className="text-main-blue font-semibold">Yeşilbilişim</span>, müşterilerine <span className="font-semibold">hızlı ve etkili</span> bir hizmet sağlamayı hedefliyor. Bunun için satış, onarım ve bakım anlaşması yapıyor ve alt yapılarının sorumluluğunu üstleniyor. Sorunlar anında ortaya çıktığında, uzaktan bağlantı kullanarak <span className="text-main-black font-semibold">anında çözüm</span> üretmeyi ve gerektiğinde en hızlı işlem sağlamayı amaçlıyoruz.</p>
        <p className="font-bold text-main-black text-[32px] text-right">Kaliteli Hizmet Sunma Sözü<span className="text-main-blue"> Yeşilbilişim</span>'de</p>
        <div className="flex flex-row mb-4">
          <img src="http://localhost:8080/img/about/about_2.jpg" alt="about" className="w-[30%]" />
          <div className="flex flex-col justify-evenly text-justify pl-4">
            <p className="text-[18px]"><span className="text-main-blue font-semibold">Yeşilbilişim</span>, teknolojik çözümlerle hayatınızı kolaylaştırmayı ve <span className="text-main-black font-semibold">müşteri memnuniyetini</span> en yüksek seviyede tutmayı amaçlar. Bireysel ve kurumsal müşterilerimize en hızlı şekilde hizmet vermekteyiz. Yapmış olduğumuz teknolojik yatırımlarımız ile en yüksek verimi almayı hedefliyoruz.</p>
            <p className="text-[18px]">Bizimle çalışmak isteyen müşterilerimize en kaliteli hizmeti sunma konusunda söz veriyoruz. Siz de <span className="text-main-black font-semibold">profesyonel ve kaliteli hizmet</span> almak istiyorsanız, <span className="text-main-blue font-semibold">Yeşilbilişim</span> ile çalışmaya başlayın.</p>
          </div>
        </div>
        <p className="font-bold text-main-black text-[32px]">Mükemmel Hizmet <span className="text-main-blue">Vizyonu</span></p>
        <p className="text-[18px] text-justify my-4"><span className="text-main-blue font-semibold">Yeşilbilişim</span> olarak, tedarik zincirinin en önemli parçası olan sipariş sonrası kargo süreçlerini <span className="text-main-black font-semibold">en hızlı ve etkileyici</span> şekilde gerçekleştirmeyi ve müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz. Mutlu müşteri profilini oluşturmak için her zaman mükemmeliyeti hedefliyor ve müşteri memnuniyetini en yüksek seviyede tutmayı garanti ediyoruz.</p>
        <div className="flex flex-row mb-4">
          <div className="flex flex-col justify-evenly text-justify pr-4">
            <p className="text-[18px]">Yakın zaman içerisinde, <span className="text-main-blue font-semibold">Yeşilbilişim</span> olarak, teknolojik gelişmeleri yakından takip ediyor ve müşterilerimize en son teknolojik çözümleri sunuyoruz. Aynı zamanda, müşterilerimize <span className="text-main-black font-semibold">özel eğitim ve danışmanlık hizmetleri</span> sunuyoruz, böylece teknolojinin faydalarından en iyi şekilde yararlanabilmelerini sağlıyoruz.</p>
            <p className="text-[18px]">Müşteri memnuniyeti odaklı çalışma anlayışımızla birlikte, tedarik zinciri ve müşteri hizmetleri konularında da en iyiyi sunmaya çalışıyoruz.Bu amaçlarımıza ulaşmak için müşterilerimizle <span className="text-main-black font-semibold">açık ve dürüst iletişim</span> içinde çalışıyor ve onların görüş ve önerilerine her zaman açığız.</p>
          </div>
          <img src="http://localhost:8080/img/about/about_3.jpg" className="w-[30%]" alt="" />
        </div>
        <div className="justify-center flex items-center mt-[50px]">
          <div className="flex flex-col text-[32px] font-semibold">
            <p className="pr-6 text-main-black">Etkin Çözümler</p>
            <p className="pl-6 text-main-blue">Başarılı Sonuçlar</p>
          </div>
          <hr className="mx-[60px] border-2 border-main-gray-3 h-[140px]" />
          <img src="http://localhost:8080/img/logo/logo.png" alt="" className="w-[30%] h-full" />
        </div>
      </div>
    </>
  )
}

export default About;

/*
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
          <img src="http://localhost:8080/img/about/about_3.jpg" className="w-[25%] max-med:w-[70%] h-full" alt="" />
        </div>
      </div>
      */