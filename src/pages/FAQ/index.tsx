import { useEffect } from "react";

const FAQ = () => {
    useEffect(() => {
        document.title = "S.S.S | Yeşil Bilişim";
    }, []);

    const toggle = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle("max-h-0");
            element.classList.toggle("p-[0_18px]");

            element.classList.toggle("max-h-[1000px]");
            element.classList.toggle("p-[9px_18px]");
        }
    };

    return (
        <>
            <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
                <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block" />
                </ul>
                <p className="text-white font-bold text-[28px]">S.S.S</p>
            </div>
            <div className="max-w-[1170px] mx-auto my-[50px]">
                <p className="text-[36px] font-bold text-main-black mb-2 text-center">Sıkça Sorulan Sorular</p>
                <div className="w-full px-4">
                    <div className="w-full border border-solid border-main-gray">
                        <div className="p-[18px] bg-main-blue cursor-pointer flex items-center text-white gap-2" onClick={() => toggle("acc1")}>
                            <i className="material-icons-round">help</i>
                            <p className="font-semibold">
                                Hangi ürünleri satıyorsunuz?
                            </p>
                        </div>
                        <div className="overflow-hidden max-h-0 p-[0_18px] ease delay-75 transition-all bg-main-gray text-main-black" id="acc1">
                            Elektronik ürünler kategorisinde, cep telefonları, tabletler, bilgisayarlar, kamera, televizyon, ev eletroniği gibi ürünler satıyoruz.
                        </div>
                    </div>
                    <div className="w-full border border-solid border-main-gray">
                        <div className="p-[18px] bg-main-blue cursor-pointer flex items-center text-white gap-2" onClick={() => toggle("acc2")}>
                            <i className="material-icons-round">help</i>
                            <p className="font-semibold">
                                Web tasarım ve geliştirme hizmetleri hakkında bilgi almak istiyorum?
                            </p>
                        </div>
                        <div className="overflow-hidden max-h-0 p-[0_18px] ease delay-75 transition-all bg-main-gray text-main-black" id="acc2">
                            Web tasarım ve geliştirme hizmetleri için React.JS, NodeJS, HTML, CSS, Spring, .NET ve WordPress gibi teknolojileri kullanabiliyoruz.
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1170px] mx-auto my-[50px]">
                <p className="text-[36px] font-bold text-main-black mb-2 text-center">Gizlilik Politikası</p>
                <div className="bg-main-gray rounded-lg p-4 flex flex-col gap-8">
                    <div>
                        <h4 className="font-semibold text-[18px]">Verilerinizin toplanma amacı</h4>
                        <p>Kişisel verilerinizi, ürün ve hizmetlerimizi satın almak, destek hizmetleri almak veya web sitemizi kullanmak için topluyoruz.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[18px]">Verilerinizin kullanımı</h4>
                        <p>Verilerinizi, ürün ve hizmetlerimizi sunmak, fatura ve teslimat işlemlerini gerçekleştirmek veya sizinle iletişim kurmak için kullanacağız.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[18px]">Verilerinizin saklanması</h4>
                        <p>Verilerinizi, yasal zorunluluklar veya hizmetlerimizi sunmak için gerekli olan süre boyunca saklayacağız.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[18px]">Verilerinizin paylaşılması</h4>
                        <p>Verilerinizi, ürün ve hizmetlerimizi sunmak, fatura ve teslimat işlemlerini gerçekleştirmek veya sizinle iletişim kurmak için gerekli olan üçüncü taraflarla paylaşabiliriz.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[18px]">Verilerinizin güvenliği</h4>
                        <p>Verilerinizi, güncel güvenlik yöntemleri ve teknolojileri kullanarak koruyacağız.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[18px]">Verilerinizin erişimi ve düzenlenmesi</h4>
                        <p>Verilerinize erişmek veya düzenlemek isteyebilirsiniz. Lütfen bize bu konuda iletişim kurun.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;