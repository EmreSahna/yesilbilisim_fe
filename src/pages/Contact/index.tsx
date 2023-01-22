import { useEffect, useState } from "react";
import IContactForm from "./types";
import ContactService from "./ContactService";

const Contact = () => {
    const initialFormData = {
        fullName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    }

    const [formData, setFormData] = useState<IContactForm>(initialFormData);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const sendForm = () => {
        ContactService.sendForm(formData)
            .then(() => {
                setFormData(initialFormData);
                setSubmitted(true);
            })
            .catch((e: Error) => {
                console.log(e);
            }
        );
    };

    useEffect(() => {
        document.title = "İletişim | Yeşil Bilişim";
    }, [])

    return(
        <>
        {submitted ? (
            <div className="bg-main-blue flex items-center justify-center">
                <div className="bg-white shadow-md rounded-xl px-16 py-8 my-[200px] max-sm:my-[30px] w-3/12 max-small:w-10/12 max-md:w-8/12 max-lg:w-6/12 max-xl:w-5/12">
                    <div className="flex justify-center">
                        <i className="material-icons text-main-blue text-[100px]">check_circle</i>
                    </div>
                    <div className="flex justify-center mt-4">
                        <span className="text-[36px] font-bold text-main-blue">Mesajınız Alındı</span>
                    </div>
                    <div className="flex justify-center mt-4">
                        <span className="text-[16px] text-main-gray-3">En kısa sürede size dönüş yapacağız.</span>
                    </div>
                    <button className="flex items-center bg-main-black text-white mx-auto py-2 px-6 rounded-xl mt-8" type="button" onClick={() => setSubmitted(false)}>
                        <span className="text-[16px] font-semibold">Yeni Mesaj Gönder</span>
                    </button>
                </div>
            </div>
        ) : (
            <div className="bg-main-blue flex items-center flex-wrap justify-center">
                <div className="w-5/12 h-min max-small:w-full max-lg:w-10/12 max-med:w-11/12 m-8">
                    <div className="bg-white shadow-md rounded-xl px-8 py-10 w-8/12 max-med:w-10/12 mx-auto max-small:w-full">
                        <div className="mb-4">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Ad/Soyad *
                            </label>
                            <input 
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" 
                                type="text" 
                                id="fullName"
                                name="fullName"
                                onChange={handleChange}
                                value={formData.fullName}
                                placeholder="örn. Ali Sönmez" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Mail Adresi *
                            </label>
                            <input 
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" 
                                type="text" 
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="örn. alisonmez@gmail.com" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Şirket İsmi
                            </label>
                            <input 
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" 
                                type="text" 
                                id="company"
                                name="company"
                                onChange={handleChange}
                                value={formData.company}
                                placeholder="örn. Yesilbilisim" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Konu *
                            </label>
                            <input 
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" 
                                type="text" 
                                id="subject"
                                name="subject"
                                onChange={handleChange}
                                value={formData.subject}
                                placeholder="örn. Destek Başvurusu" 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Mesaj *
                            </label>
                            <textarea 
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none resize-none" 
                                id="message"
                                name="message"
                                rows={6} 
                                onChange={handleChange}
                                value={formData.message}
                                placeholder="örn. Merhabalar. Destek başvurusunda bulunmak istiyorum..." 
                            />
                        </div>
                        <div className="flex justify-center">
                            <button 
                                className="flex items-center bg-main-blue text-white py-2 px-6 rounded-[10px] mt-6" 
                                type="button"
                                onClick={sendForm}
                            >
                                <span className="text-[16px] font-semibold">Gönder</span>
                                <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
                            </button>
                        </div>
                    </div>  
                </div>
                <div className="w-5/12 max-small:w-full max-med:w-10/12 mx-8 my-4">
                    <div className="mb-4">
                        <span className="text-[36px] max-small:text-[26px] font-bold text-white">Bizimle İletişime Geçin</span>
                        <p className="text-white text-[18px] max-small:text-[14px] font-normal">Formu doldurarak bizimle iletişime geçebilir, bizlerden destek alabilirsiniz ayrıca önerilerde bulunabilir, aklınızdaki soruları da sorabilirsiniz.</p>
                    </div>
                    <div className="bg-white rounded-xl px-4 py-4 mb-8 text-[20px] max-small:text-[12px] w-8/12 mx-auto max-small:w-full">
                        <div className="flex justify-between mb-1">
                            <span className="text-main-black font-bold">Mail Adresimiz</span>
                            <span className="">info@yesilbilisim.net</span>
                        </div>
                        <hr/>
                        <div className="flex justify-between mt-1">
                            <span className="text-main-black font-bold">Telefon Numaramız</span>
                            <span className="">0 (541) 800 7294</span>
                        </div>
                    </div>
                    <img src="http://localhost:8080/img/contact/contact.png" />
                </div>
            </div>
        )}
        </>
    )
}

export default Contact;

/*

                    
                    */