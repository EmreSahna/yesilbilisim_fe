const Contact = () => {
    return(
        <div className="bg-main-blue grid grid-cols-2 gap-x-10 px-16 py-12">
            <div className="col-span-1 bg-white shadow-md rounded-xl px-8 py-10 mb-4">
                <div className="mb-4">
                    <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                        Ad/Soyad *
                    </label>
                    <input className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" type="text" placeholder="örn. Ali Sönmez" />
                </div>
                <div className="mb-4">
                    <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                        Mail Adresi *
                    </label>
                    <input className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" type="text" placeholder="örn. alisonmez@gmail.com" />
                </div>
                <div className="mb-4">
                    <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                        Şirket İsmi *
                    </label>
                    <input className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" type="text" placeholder="örn. Yesilbilisim" />
                </div>
                <div className="mb-4">
                    <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                        Konu *
                    </label>
                    <input className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" type="text" placeholder="örn. Destek Başvurusu" />
                </div>
                <div className="mb-6">
                    <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                        Mesaj *
                    </label>
                    <textarea className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none resize-none" rows={6} placeholder="örn. Merhabalar. Destek başvurusunda bulunmak istiyorum..." />
                </div>
                <div className="flex justify-center">
                    <button className="flex items-center bg-main-black text-white py-2 px-6 rounded-xl" type="button">
                        <span className="text-[16px] font-semibold">Gönder</span>
                        <i className="font-arrow not-italic rotate-90 inline-block text-main-blue text-[20px] ml-2 mt-1">¥</i>
                    </button>
                </div>
            </div>
            <div>
                <div className="mb-8">
                    <span className="text-[36px] font-bold text-white">Bizimle İletişime Geçin</span>
                    <p className="text-white text-[18px] font-normal">Formu doldurarak bizimle iletişime geçebilir, bizlerden destek alabilirsiniz ayrıca önerilerde bulunabilir, aklınızdaki soruları da sorabilirsiniz.</p>
                </div>
                <div className="bg-white rounded-xl px-4 py-4 mb-8">
                    <div className="text-[20px] flex justify-between mb-1">
                        <span className="text-main-black font-bold">Mail Adresimiz</span>
                        <span className="">info@yesilbilisim.net</span>
                    </div>
                    <hr/>
                    <div className="text-[20px] flex justify-between mt-1">
                        <span className="text-main-black font-bold">Telefon Numaramız</span>
                        <span className="">0 (541) 800 7294</span>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-xl absolute right-0 w-3/5 z-10" src="http://localhost:8080/img/contact/contact_1.jpg" alt="1" />
                    <img className="rounded-xl absolute left-0 top-12 w-3/6" src="http://localhost:8080/img/contact/contact_2.jpg" alt="2" />
                    <img className="rounded-xl absolute right-4 top-40 w-3/5 z-10" src="http://localhost:8080/img/contact/contact_3.jpg" alt="3" />
                </div>
            </div>
        </div>
    )
}

export default Contact;