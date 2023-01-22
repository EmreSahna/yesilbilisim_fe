import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        document.title = "Hizmetler | Yeşil Bilişim";
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
                <p className="text-white font-bold text-[28px]">Çözümlerimiz</p>
            </div>
            <div className="my-8">
                <div className="bg-main-gray w-10/12 flex text-center justify-center mx-auto items-center gap-16 p-12 my-12">
                    <h1 className="font-bold text-[36px]">Veri Yönetimi Güvenliği</h1>
                    <p className="w-[500px] text-[14px]">Şirketimiz, Veri Yönetimi Güvenliği hizmetini müşterilerimize sunmaktadır. Bu hizmet ile verileriniz saldırılardan korunur, şifreleme ile güvenli bir şekilde saklanır ve veri kaybı önlenir. Böylece, verilerinizin güvende olduğundan emin olabilirsiniz. Ayrıca, hizmetimiz ile sanal ortamlardaki işlemleriniz daha güvenli hale gelir. Bu sayede, işletmeniz için kritik olan verilerin güvenliğini sağlamış olursunuz.</p>
                </div>
                <div className="bg-main-black w-10/12 text-center flex justify-center mx-auto items-center gap-16 p-12 text-white">
                    <p className="w-[500px] text-[14px]">Şirketimiz, Ağ ve Güvenlik Çözümleri hizmeti ile müşterilerimize internetteki bilgilerini ve verilerini koruma amacına yönelik çözümler sunmaktadır. Bu hizmetler arasında firewall, VPN, güvenlik yazılımları gibi önlemler yer almaktadır. Ağ ve güvenlik çözümleri ihtiyacı, artan sanal ortamlarda yapılan işlemler ve çevrimiçi faaliyetler sebebiyle giderek daha önem kazanmaktadır. Müşterilerimize verilerinin ve bilgilerinin güvende olmasını sağlamak amacı ile hizmet sunmaktayız.</p>
                    <h1 className="font-bold text-[36px]">Ağ ve Güvenlik Çözümleri</h1>
                </div>
                <div className="bg-main-blue w-10/12 flex text-center justify-center mx-auto items-center gap-16 p-12 my-12 text-white">
                    <h1 className="font-bold text-[36px]">Bulut Bilişim Hizmetleri</h1>
                    <p className="w-[500px] text-[14px]">Şirketimiz, Bulut Bilişim Hizmetleri hizmetini müşterilerimize sunmaktadır. Bu hizmet ile müşterilerimiz, verilerini ve uygulamalarını internet üzerinden erişilebilir hale getirirler. Bu sayede, müşterilerimiz verilerine ve uygulamalarına her yerden ve her cihazdan erişebilirler.  Bu hizmet ile müşterilerimizin işletmelerine esneklik, ölçeklenebilirlik ve güvenlik sağlarız.</p>
                </div>
                <div className="bg-main-gray w-10/12 flex text-center justify-center mx-auto items-center gap-16 p-12 my-12">
                    <p className="w-[500px] text-[14px]">Şirketimiz, Web Tasarım ve Geliştirme hizmetleri sunmaktadır. Bu hizmetler arasında web sitelerinin tasarımı, yazılım geliştirme, web uygulamaları ve mobil uygulamalar gibi hizmetler yer almaktadır. Hizmetlerimiz ile müşterilerimize, kullanıcı dostu, estetik ve işlevsel bir web sitesi sunarız. Bu hizmetler ile müşterilerimize, işletmelerine özgü çözümler sunarız. Böylece, işletmelerinin online varlıklarını güçlendiririz ve onların işlerini daha verimli hale getiririz.</p>
                    <h1 className="font-bold text-[36px]">Web Tasarım ve Geliştirme</h1>
                </div>
                <div className="bg-main-black w-10/12 text-center flex justify-center mx-auto items-center gap-16 p-12 text-white">
                    <h1 className="font-bold text-[36px]">Bilişim Güvenliği Hizmetleri</h1>
                    <p className="w-[500px] text-[14px]">Şirketimiz, Bilişim Güvenliği Hizmetleri sunmaktadır. Bu hizmetler arasında siber güvenlik, network güvenliği, veri güvenliği gibi hizmetler yer almaktadır. Hizmetlerimiz ile müşterilerimize siber saldırıları önlemek, verilerinizi koruma, ağlarınızı güvende tutmak gibi amaçları gerçekleştiririz. Böylece müşterilerimize online faaliyetlerinizde güvenli bir ortam sağlarız. Bu hizmetler ile müşterilerimize bilişim sistemlerinin güvenliğini sağlamak amacı ile hizmet sunmaktayız.</p>
                </div>
                <div className="bg-main-blue w-10/12 flex text-center justify-center mx-auto items-center gap-16 p-12 my-12 text-white">
                    <p className="w-[500px] text-[14px]">Şirketimiz, İşletme Yazılımı Geliştirme hizmeti sunmaktadır. Bu hizmetler arasında ERP, CRM, e-ticaret gibi işletmelerin çeşitli iş süreçlerini otomatikleştirmek için tasarlanmış yazılımların geliştirilmesi yer almaktadır. İşletme yazılımı hizmetleri ile müşterilerimize verimliliği artırmak, iş süreçlerini otomatikleştirmek, maliyetleri azaltmak ve ölçeklenebilirlik sağlamak amacı ile hizmet sunmaktayız. Böylece işletmeleriniz için özgün ve kullanışlı yazılım çözümleri sunarız.</p>
                    <h1 className="font-bold text-[36px]">İşletme Yazılımı Geliştirme</h1>
                </div>
                <div className="bg-main-gray w-10/12 flex text-center justify-center mx-auto items-center gap-16 p-12 my-12">
                    <h1 className="font-bold text-[36px]">Pazarlama Danışmanlığı</h1>
                    <p className="w-[500px] text-[14px]">Şirketimiz, Pazarlama Danışmanlığı hizmetini sunmaktadır. Bu hizmetler arasında pazarlama stratejileri, ürün tanıtımı, pazarlama araştırması, müşteri analizi gibi hizmetler yer almaktadır. Pazarlama Danışmanlığı hizmetleri ile müşterilerimize pazarlama faaliyetlerinin daha etkili olmasını sağlarız. Pazarlama Danışmanlığı hizmetleri ile işletmelerinin pazarlama faaliyetlerini optimize ederek işletmelerinin büyümelerine katkıda bulunuruz.</p>
                </div>
                <div className="bg-main-black w-10/12 text-center flex justify-center mx-auto items-center gap-16 p-12 text-white">
                    <p className="w-[500px] text-[14px]">Şirketimiz, Web Güvenliği Çözümleri hizmetini sunmaktadır. Bu hizmetler arasında web uygulamalarının güvenliği, siber saldırıları önleme, web uygulamalarına yönelik araştırmalar gibi hizmetler yer almaktadır. Web Güvenliği Çözümleri hizmeti ile müşterilerimize web uygulamalarının güvenliği konusunda destek veririz. Böylece müşterilerimize güvenli bir web ortamı sağlarız.</p>
                    <h1 className="font-bold text-[36px]">Web Güvenliği Çözümleri</h1>
                </div>
                <div className="bg-main-blue w-10/12 flex text-center justify-center mx-auto items-center gap-16 p-12 my-12 text-white">
                    <h1 className="font-bold text-[36px]">Grafik Tasarım</h1>
                    <p className="w-[500px] text-[14px]">Şirketimiz, Grafik Tasarım hizmeti sunmaktadır. Bu hizmetler arasında logo tasarımı, afiş tasarımı, broşür tasarımı, web tasarımı gibi hizmetler yer almaktadır. Grafik Tasarım hizmetleri ile müşterilerimize görsel bir dil kullanarak mesajlarının etkili bir şekilde iletmelerine olanak sağlarız.Bu hizmetler ile müşterilerimize reklam kampanyalarının daha etkili olması, markalarının fark edilirliğinin artması, web sitelerinin daha çekici hale gelmesi, gibi amaçları gerçekleştiririz. Böylece müşterilerimize daha güçlü bir online varlık sağlarız.</p>
                </div>
                <div className="bg-main-gray w-10/12 flex text-center justify-center mx-auto items-center gap-16 p-12 my-12">
                    <p className="w-[500px] text-[14px]">Şirketimiz, E-posta Güvenliği Çözümleri hizmetini sunmaktadır. Bu hizmetler arasında e-posta filtreleme, e-posta şifreleme, e-posta yedekleme, e-posta kuralları oluşturma gibi hizmetler yer almaktadır. E-posta Güvenliği Çözümleri hizmeti ile müşterilerimize e-postaların güvenliği konusunda destek veririz. Ayrıca, e-posta yedekleme ile e-postaların kaybını önleriz ve e-posta kuralları ile işletmeniz için önemli olan e-postaların belirlenmesini ve yönetilmesini sağlarız. Böylece müşterilerimize güvenli bir e-posta ortamı sağlarız.</p>
                    <h1 className="font-bold text-[36px]">E-posta Güvenliği Çözümleri</h1>
                </div>
            </div>
        </div>
    );
};

export default Services;