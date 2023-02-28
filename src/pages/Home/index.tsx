import { useEffect, useState } from "react";
import Slider from "./components/slider";
import HomeService from "./HomeService";
import { ICard } from "./types";
import { Helmet } from "react-helmet";

const Home = () => {
  const [slider, setSlider] = useState<(string)[]>([]);
  const [companies, setCompanies] = useState<(string)[]>([]);
  const [services, setServices] = useState<(ICard)[]>([]);

  useEffect(() => {
    HomeService.getHomepage().then((res) => {
      setCompanies(res.data.companies);
      setServices(res.data.cards);
      setSlider(res.data.sliders);
    });
  }, []);
  
  return (
    <>
      <Helmet encodeSpecialCharacters={true}>
        <title>Anasayfa | Yeşil Bilişim</title>
        <meta name="description" content="Yeşil Bilişim, Bireysel ve kurumsal şirketlerin bilişim ihtiyaçlarını karşılayan güvenilir bir çözüm ortağıdır." />
        <meta property="og:title" content="Yeşil Bilişim"/> 
        <meta property="og:image" content="http://yesilbilisim.net/img/logo/logo.png" />
        <meta property="og:description" content="Yeşil Bilişim, Bireysel ve kurumsal şirketlerin bilişim ihtiyaçlarını karşılayan güvenilir bir çözüm ortağıdır."/>
        <meta property="og:type" content="website"/>
      </Helmet>
      
      <Slider slider={slider}/>

      <div className="my-[50px] flex justify-center items-center" id="is">
        <div className="max-w-[1170px]">
          <h1 className="font-bold lg:text-[36px] text-[24px] justify-center flex">İş Ortaklarımız</h1>
          <ul className="flex items-center justify-center flex-wrap">
            {companies &&
              companies.map((item, index) => {
                return (
                  <li className="lg:w-[15%] lg:p-5 p-3 w-[25%]" key={index}>
                    <img src={`http://localhost:8080/img/${item}`} alt="" />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      
      <div className="my-[100px]">
        <h1 className="font-bold text-[36px] justify-center flex">Hizmetlerimiz</h1>
        <p className="font-normal text-[14px] text-center"><span className="text-main-blue">Yesilbilisim</span>, müşterilerine geniş bir hizmet yelpazesi sunmaktadır.</p>
        <section className="flex my-4 mx-auto text-center flex-wrap max-w-[1170px]">
          {services &&
            services.map((item, index) => {
              return (
                <div className="w-1/5 p-2 max-small:w-1/2 max-med:w-4/12" key={index}>
                  <a href={`hizmetler/${item.url}`}>
                    <div className="shadow-card rounded-lg bg-white h-full pt-4 group">
                      <div className="bg-main-blue w-4/12 group-hover:scale-[1.15] transform transition duration-300 p-2 rounded-lg flex justify-center items-center mx-auto">
                        <img src={`http://localhost:8080/img/${item.icon}`} className="w-full invert" alt="" />
                      </div>
                      <p className="text-black text-[20px] font-bold mt-1 mx-3">{item.title}</p>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </section>
        <p className="font-normal text-[14px] max-w-[1170px] mx-auto text-center">Bu hizmetlerimizin yanı sıra, müşterilerimize özel olarak tasarlanmış paketler de sunmaktayız. Böylece, müşterilerimizin ihtiyaçlarına en uygun hizmetleri sunarak, onların işlemlerini daha da kolaylaştırırız. Eğer siz de en iyi hizmetleri arıyorsanız, şirketimiz ile iletişime geçebilir ve özel hizmetlerimizden yararlanabilirsiniz.</p>
        <div className="flex justify-center my-2 gap-4 max-small:mx-2">
          <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px]" type="button">
            <a href="/hizmetler" className="flex items-center">
              <span className="text-[16px] font-semibold">Hizmetlerimizi İncele</span>
              <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
            </a>
          </button>
          <button className="flex items-center bg-main-black text-white py-2 px-4 rounded-[10px]" type="button">
            <a href="/cozumler" className="flex items-center">
              <span className="text-[16px] font-semibold">Çözümlerimizi İncele</span>
              <i className="material-icons-round text-main-blue text-[20px] font-semibold ml-1">arrow_forward</i>
            </a>
          </button>
        </div>
      </div>

      <div className="bg-main-gray flex md:flex-row flex-col justify-center my-[100px] lg:px-12 lg:py-0 py-6 gap-8">
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
        <img src={`http://localhost:8080/img/homepage/destek.jpg`} className="h-auto w-[500px]" alt="destek" />
      </div>

      <div className="my-[100px] max-w-[1170px] relative text-white mx-auto">
        <div className="absolute h-full w-[6px] bg-main-blue left-1/2 translate-x-[-50%] rounded-lg max-med:left-[30px] max-small:hidden"></div> 
        <div className="flex justify-start max-med:m-[30px_10px_3px_60px] max-small:m-[10px]">
          <section className="bg-main-blue rounded-md w-[calc(50%_-_40px)] max-med:w-full p-[20px] relative text-main-gray">
            <i className="material-icons-round right-[-60px] max-med:left-[-50px] top-[35%] absolute bg-main-blue h-[40px] w-[40px] items-center rounded-[50%] leading-[40px] text-[28px] flex justify-center text-main-gray max-small:hidden animate-[scale-rotate_4s_ease-in-out_1s_infinite]">thumb_up_alt</i>
            <h4 className="font-semibold text-[20px]">Kaliteli Hizmet</h4>
            <p className="text-justify">Profesyonel ekibimizle, müşterilerimize en yüksek kaliteli hizmeti sunuyoruz. Tüm hizmetlerimiz garanti kapsamındadır ve müşteri memnuniyetini ön planda tutuyoruz. Ayrıca, hizmetlerimizi sürekli olarak geliştiriyor ve güncelliyoruz, böylece müşterilerimize en iyi hizmeti sunabiliyoruz.</p>
          </section>
        </div>
        <div className="flex justify-end max-med:m-[30px_10px_3px_60px] max-small:m-[10px]">
          <section className="bg-main-blue rounded-md w-[calc(50%_-_40px)] max-med:w-full p-[20px] relative text-main-gray">
            <i className="material-icons-round left-[-60px] max-med:left-[-50px] top-[35%] absolute bg-main-blue h-[40px] w-[40px] items-center rounded-[50%] leading-[40px] text-[28px] flex justify-center text-main-gray max-small:hidden animate-[scale-rotate_4s_ease-in-out_2s_infinite]">shopping_cart</i>
            <h4 className="font-semibold text-[20px]">Uygun Fiyat</h4>
            <p className="text-justify">Rakiplerimizle karşılaştırıldığında, hizmet ve ürünlerimizin fiyatları oldukça uygun ve müşterilerimize en iyi değer sunuyoruz. Aynı zamanda, müşterilerimize indirim ve kampanyalar sunuyoruz, böylece daha uygun fiyatlarla hizmet ve ürünlerimizi kullanabiliyorlar.</p>
          </section>
        </div>
        <div className="flex justify-start max-med:m-[30px_10px_3px_60px] max-small:m-[10px]">
          <section className="bg-main-blue rounded-md w-[calc(50%_-_40px)] max-med:w-full p-[20px] relative text-main-gray">
            <i className="material-icons-round right-[-60px] max-med:left-[-50px] top-[35%] absolute bg-main-blue h-[40px] w-[40px] items-center rounded-[50%] leading-[40px] text-[28px] flex justify-center text-main-gray max-small:hidden animate-[scale-rotate_4s_ease-in-out_3s_infinite]">question_mark</i>
            <h4 className="font-semibold text-[20px]">Mükemmel Müşteri Desteği</h4>
            <p className="text-justify">7/24 müşteri desteği sunuyoruz ve müşterilerimizin sorularına anında yanıt veriyoruz. Ayrıca, müşterilerimizin geri bildirimlerini dikkate alıyoruz ve hizmetlerimizi ve ürünlerimizi onların ihtiyaçlarına göre geliştiriyoruz.</p>
          </section>
        </div>
      </div>

      <div className="bg-main-gray flex md:flex-row flex-col justify-center my-[100px] lg:px-12 lg:py-0 py-6 gap-8">
        <img src={`http://localhost:8080/img/homepage/blog.jpg`} className="h-auto w-[500px]" alt="blog" />
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

      <div className="flex justify-center items-center my-[100px]">
          <ul className="flex justify-center gap-12 max-w-[1170px] items-start mx-4 flex-wrap">
            <li className="flex justify-center flex-col w-[30%] max-small:w-full max-med:w-[70%]">
              <span className="material-icons-round rounded-[50%] bg-main-blue text-[50px] text-main-gray p-2 w-fit mx-auto mb-4">vpn_lock</span>
              <h4 className="text-main-black font-semibold text-[18px] mb-1 text-center">Kurumsal Ağlarınız İçin Güvenliğinizi Bizimle Artırın</h4>
              <p className="text-justify text-[14px]">Günümüzde, kurumsal ağların güvenliği önemli bir konudur. Ağınızın güvenliğini bizimle artırmak için, en son teknolojileri kullanarak ağınızı tarayıp, zayıf noktaları tespit eder ve güvenliği arttırmak için gerekli önlemleri alırız. Ağınızın güvenliğini bizimle artırmak için bize bugün ulaşın.</p>
            </li>
            <li className="flex justify-center flex-col w-[30%] max-small:w-full max-med:w-[70%]">
              <span className="material-icons-round rounded-[50%] bg-main-blue text-[50px] text-main-gray p-2 w-fit mx-auto mb-4">terminal</span>
              <h4 className="text-main-black font-semibold text-[18px] mb-1 text-center">Özelleştirilmiş Yazılım Hizmetleri İle İşletmenizi Geliştirin</h4>
              <p className="text-justify text-[14px]">İşletmenizin ihtiyacı olan özelleştirilmiş yazılım hizmetleri için bizimle birlikte çalışın. Uzun yılların deneyimi ile işletmenizin ihtiyacı olan yazılımı kusursuz bir şekilde tasarlamakta ve uygulamaktadır. Bize bugün ulaşın ve işletmenizi en iyi şekilde geliştirmek için özelleştirilmiş yazılım hizmetlerimizi kullanın.</p>
            </li>
            <li className="flex justify-center flex-col w-[30%] max-small:w-full max-med:w-[70%]">
              <span className="material-icons-round rounded-[50%] bg-main-blue text-[50px] text-main-gray p-2 w-fit mx-auto mb-4">inventory</span>
              <h4 className="text-main-black font-semibold text-[18px] mb-1 text-center">Güvenilir ve Kaliteli Ürünlerle İşletmenizi Destekleyin</h4>
              <p className="text-justify text-[14px]">İşletmeniz için gerekli olan güvenilir ve kaliteli ürünleri bizimle satın alın. Uzun yılların deneyimi ile seçtiğimiz ürünler, işletmenizin ihtiyacı olan özellikleri karşılamaktadır. Ayrıca, satın aldığınız ürünler için mükemmel bir müşteri desteği de sunmaktayız. Ürünlerimizi incelemek ve satın almak için bize bugün ulaşın.</p>
            </li>
          </ul>
      </div>
    </>
  )
}

export default Home;