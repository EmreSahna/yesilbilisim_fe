export default function footer() {
    return (
        <footer className="bg-main-black text-center lg:text-left py-3">
            <div className="container">
                <div className="grid grid-cols-[200px_200px_200px] justify-center gap-[125px] text-white mx-6">
                    <div className="mb-6">
                        <h5 className="font-semibold text-[20px] text-center">Yeşil Bilişim</h5>
                        <ul className="list-none mb-0">
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">Anasayfa</a>
                            </li>
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">Hakkımızda</a>
                            </li>
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">Ürünlerimiz</a>
                            </li>
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">Blog</a>
                            </li>
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">Çözümlerimiz</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h5 className="font-semibold text-[20px] text-center">Destek</h5>
                        <ul className="list-none mb-0">
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">İletişim</a>
                            </li>
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">İş Ortaklarımız</a>
                            </li>
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">Q&A</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h5 className="font-semibold text-[20px] text-center">İletişim Bilgileri</h5>
                        <ul className="list-none mb-0">
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">info@yesilbilisim.net</a>
                            </li>
                            <li className="flex items-center">
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[22px]">¦</i>
                                <a href="#!" className="mx-2 text-sm">0 (541) 800 7294</a>
                            </li>
                        </ul>
                        <div className="relative w-[300px] top-6 -left-16">
                            <img src={require('../assets/logo.png')} style={{ position: 'absolute' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center flex">
                <span className="text-white text-sm">Yesil Bilişim, Bireysel ve kurumsal şirketlerin bilişim ihtiyaçlarını karşılayan güvenilir bir çözüm ortağıdır.</span>
            </div>
        </footer>
    )
}