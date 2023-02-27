import { useEffect } from "react";
import TitleSection from "../../common/titlesection";

const About = () => {
  useEffect(() => {
    document.title = "Hakkımızda | Yeşil Bilişim";
  }, [])
  return (
    <>
      <TitleSection title="Hakkımızda" />

      <div className="max-w-[1170px] mx-auto flex flex-col my-[50px]">
        <div className="my-[50px]">
          <p className="font-bold text-main-blue text-[32px] max-small:text-center">Yeşilbilişim<span className="text-main-black"> Hakkında</span></p>
          <div className="my-[10px] text-justify max-small:px-4">
            <img src="http://localhost:8080/img/about/about_1.jpg" alt="about" className="w-[30%] max-small:w-[60%] float-right ml-4"/>
            <p className="mb-[40px]"><span className="text-main-blue font-semibold">Yeşilbilişim</span>, 2021 yılında kurulmuş bir şirkettir. Bizim amacımız müşterilerimize en iyi hizmeti sunmaktır. Bu nedenle, <span className="font-semibold">ağ ve güvenlik</span>, <span className="font-semibold">web tasarım ve geliştirme</span>, <span className="font-semibold">ürün satışı</span> gibi alanlarda uzmanlaşmış profesyonel bir ekibimiz bulunmaktadır.</p>
            <p className="my-[40px]">Ekibimiz, sektörde uzun yıllardır bulunan deneyimli ve uzman kişilerden oluşmaktadır. Her bir çalışanımız, müşterilerimize en iyi hizmeti sunma konusunda motivasyonlu ve hedef odaklıdır. Bizimle çalışan müşterilerimiz, profesyonel ve kaliteli hizmet alacaklarından emin olabilirler.</p>
            <p className="my-[40px]"><span className="text-main-blue font-semibold">Yeşilbilişim</span>, müşterilerine <span className="font-semibold">hızlı ve etkili</span> bir hizmet sağlamayı hedefliyor. Bunun için satış, onarım ve bakım anlaşması yapıyor ve alt yapılarının sorumluluğunu üstleniyor. Sorunlar anında ortaya çıktığında, uzaktan bağlantı kullanarak <span className="text-main-black font-semibold">anında çözüm</span> üretmeyi ve gerektiğinde en hızlı işlem sağlamayı amaçlıyoruz.</p>
          </div>
        </div>

        <div className="my-[50px]">
          <p className="font-bold text-main-black text-[32px] text-right max-small:text-center">Kaliteli Hizmet Sunma Sözü<span className="text-main-blue"> Yeşilbilişim</span>'de</p>
          <div className="my-[10px] text-justify max-small:px-4">
            <img src="http://localhost:8080/img/about/about_2.jpg" alt="about" className="w-[30%] max-small:w-[60%] float-left mr-4"/>
            <p className="mb-[40px]"><span className="text-main-blue font-semibold">Yeşilbilişim</span>, teknolojik çözümlerle hayatınızı kolaylaştırmayı ve <span className="text-main-black font-semibold">müşteri memnuniyetini</span> en yüksek seviyede tutmayı amaçlar. Bireysel ve kurumsal müşterilerimize en hızlı şekilde hizmet vermekteyiz. Yapmış olduğumuz teknolojik yatırımlarımız ile en yüksek verimi almayı hedefliyoruz.</p>
            <p className="my-[40px]">Bizimle çalışmak isteyen müşterilerimize en kaliteli hizmeti sunma konusunda söz veriyoruz. Siz de <span className="text-main-black font-semibold">profesyonel ve kaliteli hizmet</span> almak istiyorsanız, <span className="text-main-blue font-semibold">Yeşilbilişim</span> ile çalışmaya başlayın.</p>
          </div>
        </div>

        <div className="my-[50px]">
          <p className="font-bold text-main-black text-[32px] max-small:text-center">Mükemmel Hizmet <span className="text-main-blue">Vizyonu</span></p>
          <div className="my-[10px] text-justify max-small:px-4">
            <img src="http://localhost:8080/img/about/about_3.jpg" className="w-[30%] max-small:w-[60%] float-right ml-4" alt="" />
            <p className="mb-[40px]"><span className="text-main-blue font-semibold">Yeşilbilişim</span> olarak, tedarik zincirinin en önemli parçası olan sipariş sonrası kargo süreçlerini <span className="text-main-black font-semibold">en hızlı ve etkileyici</span> şekilde gerçekleştirmeyi ve müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz. Mutlu müşteri profilini oluşturmak için her zaman mükemmeliyeti hedefliyor ve müşteri memnuniyetini en yüksek seviyede tutmayı garanti ediyoruz.</p>
            <p className="my-[40px]">Yakın zaman içerisinde, <span className="text-main-blue font-semibold">Yeşilbilişim</span> olarak, teknolojik gelişmeleri yakından takip ediyor ve müşterilerimize en son teknolojik çözümleri sunuyoruz. Aynı zamanda, müşterilerimize <span className="text-main-black font-semibold">özel eğitim ve danışmanlık hizmetleri</span> sunuyoruz, böylece teknolojinin faydalarından en iyi şekilde yararlanabilmelerini sağlıyoruz.</p>
            <p className="my-[40px]">Müşteri memnuniyeti odaklı çalışma anlayışımızla birlikte, tedarik zinciri ve müşteri hizmetleri konularında da en iyiyi sunmaya çalışıyoruz. Bu amaçlarımıza ulaşmak için müşterilerimizle <span className="text-main-black font-semibold">açık ve dürüst iletişim</span> içinde çalışıyor ve onların görüş ve önerilerine her zaman açığız.</p>
          </div>
        </div>

        <div className="justify-center flex items-center my-[50px] gap-[30px] max-small:gap-[15px]">
          <div className="flex flex-col text-[32px] font-semibold max-small:text-[20px]">
            <p className="pr-6 text-main-black">Etkin Çözümler</p>
            <p className="pl-6 text-main-blue">Başarılı Sonuçlar</p>
          </div>
          <hr className="border-2 border-main-gray-3 h-[140px] max-small:h-[80px]" />
          <img src="http://localhost:8080/img/logo/logo.png" alt="" className="w-[30%] max-small:w-[40%] h-full" />
        </div>
      </div>
    </>
  )
}

export default About;