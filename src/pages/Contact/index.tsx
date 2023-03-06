import { useEffect, useState } from "react";
import IContactForm from "./types";
import ContactService from "./ContactService";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
const Contact = () => {
    const [submitted, setSubmitted] = useState<boolean>(false);

    const schema = yup.object().shape({
        fullName: yup.string().max(30, "Ad/Soyad en fazla 30 karakter içerebilir.").required("Ad Soyad boş bırakılamaz."),
        email: yup.string().email("Geçerli bir e-posta adresi giriniz.").required("E-posta adresi boş bırakılamaz."),
        company: yup.string().max(30, "Şirket ismi en fazla 30 karakter içerebilir.").notRequired(),
        subject: yup.string().max(30, "Konu en fazla 30 karakter içerebilir.").required("Konu boş bırakılamaz."),
        message: yup.string().max(500, "Mesaj en fazla 500 karakter içerebilir.").required("Mesaj boş bırakılamaz.")
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IContactForm>({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data: IContactForm) => {
        ContactService.sendForm(data)
            .then(() => {
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                }
                , 5000);
            })
            .catch((e: Error) => {
                console.log(e);
            }
        );
        reset();
    };

    return(
        <>
        <Helmet>
            <title>İletişim | Yeşil Bilişim</title>
            <meta name="description" content="İletişim sayfası" />
        </Helmet>
        
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
                </div>
            </div>
        ) : (
            <div className="bg-main-blue flex items-center flex-wrap justify-center py-[40px]">
                <div className="w-5/12 h-min max-small:w-full max-lg:w-10/12 max-med:w-11/12 m-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-xl px-8 py-10 w-8/12 max-med:w-10/12 mx-auto max-small:w-full">
                        <div className="mb-4">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Ad/Soyad *
                            </label>
                            <input 
                                {...register("fullName")}
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" 
                                placeholder="örn. Ali Sönmez" 
                            />
                            {errors.fullName && <span className="text-red-700 font-light text-[12px]">{errors.fullName.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Mail Adresi *
                            </label>
                            <input 
                                {...register("email")}
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" 
                                placeholder="örn. alisonmez@gmail.com" 
                            />
                            {errors.email && <span className="text-red-700 font-light text-[12px]">{errors.email.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Şirket İsmi
                            </label>
                            <input 
                                {...register("company")}
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" 
                                placeholder="örn. Yesilbilisim" 
                            />
                            {errors.company && <span className="text-red-700 font-light text-[12px]">{errors.company.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Konu *
                            </label>
                            <input 
                                {...register("subject")}
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none" 
                                placeholder="örn. Destek Başvurusu" 
                            />
                            {errors.subject && <span className="text-red-700 font-light text-[12px]">{errors.subject.message}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                Mesaj *
                            </label>
                            <textarea 
                                {...register("message")}
                                className="appearance-none border rounded-md w-full py-3 px-3 text-main-gray-3 leading-tight focus:outline-none resize-none" 
                                rows={6} 
                                placeholder="örn. Merhabalar. Destek başvurusunda bulunmak istiyorum..." 
                            />
                            {errors.message && <span className="text-red-700 font-light text-[12px]">{errors.message.message}</span>}
                        </div>
                        <div className="flex justify-center">
                            <button 
                                type="submit" 
                                className="flex items-center bg-main-blue text-white py-2 px-6 rounded-[10px] mt-6"
                            >
                                <span className="text-[16px] font-semibold">Gönder</span>
                                <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-5/12 max-small:w-full max-med:w-10/12 mx-8 my-4">
                    <div className="mb-4">
                        <span className="text-[36px] max-small:text-[26px] font-bold text-white">Bizimle İletişime Geçin</span>
                        <p className="text-white text-[18px] max-small:text-[14px] font-normal">Formu doldurarak bizimle iletişime geçebilir, bizlerden destek alabilirsiniz ayrıca önerilerde bulunabilir, aklınızdaki soruları da sorabilirsiniz.</p>
                    </div>
                    <div className="bg-white rounded-xl px-4 py-4 mb-8 text-[20px] max-small:text-[16px] w-8/12 mx-auto max-small:w-full">
                        <div className="flex justify-between mb-1">
                            <span className="text-main-black font-bold">Mail Adresimiz</span>
                            <span>info@yesilbilisim.net</span>
                        </div>
                        <hr/>
                        <div className="flex justify-between my-1">
                            <span className="text-main-black font-bold">Telefon Numaramız</span>
                            <div className="w-[35%]">
                                <img src="http://localhost:8080/img/tel.png" alt="telefon" className="h-full w-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <img src="http://localhost:8080/img/contact.png" alt="iletişim"/>
                </div>
            </div>
        )}
        </>
    )
}

export default Contact;