import { useState } from "react";
import CommonService from "./CommonService";
import { IEmail } from "./types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const Footer = () => {
    const [submit, setSubmit] = useState<boolean>(false);

    const schema = yup.object().shape({
        email: yup.string().email("Geçerli bir e-posta adresi giriniz.").required("E-posta adresi boş bırakılamaz."),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IEmail>({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data: IEmail) => {
        CommonService.registerNews(data)
        .then(res => {
            setSubmit(true);
            setTimeout(() => {
                setSubmit(false);
            }
            , 3000);
        })
        .catch(err => {
            console.log(err);
        });
        reset();
    };

    return (
        <footer className="py-7 bg-main-black">
            <div className="m-auto max-w-[1170px] ">
                <div className="flex flex-wrap">
                    <div className="w-1/4 px-4 max-med:w-1/2 max-small:w-full max-small:mb-[30px] max-med:mb-[20px]">
                        <h4 className="font-semibold text-[24px] ml-6 text-white">Yeşil Bilişim</h4>
                        <hr className="w-1/5 bg-main-blue h-[2px] border-none ml-6 mb-3" />
                        <ul className="text-main-gray text-sm">
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm font-semibold mr-2">arrow_forward_ios</i>
                                <a href="/hakkimizda">Hakkımızda</a>
                            </li>
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm font-semibold mr-2">arrow_forward_ios</i>
                                <a href="/blog">Blog</a>
                            </li>
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm font-semibold mr-2">arrow_forward_ios</i>
                                <a href="/hizmetler">Hizmetlerimiz</a>
                            </li>
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm font-semibold mr-2">arrow_forward_ios</i>
                                <a href="/cozumler">Çözümlerimiz</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/4 px-4 max-med:w-1/2 max-small:w-full max-small:mb-[30px]">
                        <h4 className="font-semibold text-[24px] ml-6 text-white">Destek</h4>
                        <hr className="w-1/5 bg-main-blue h-[2px] border-none ml-6 mb-3" />
                        <ul className="text-main-gray text-sm">
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm font-semibold mr-2">arrow_forward_ios</i>
                                <a href="/iletisim">İletişim</a>
                            </li>
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm font-semibold mr-2">arrow_forward_ios</i>
                                <a href="/sss">Sıkça Sorulan Sorular</a>
                            </li>
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm font-semibold mr-2">arrow_forward_ios</i>
                                <a href="/sss">Gizlilik Politikası</a>
                            </li>
                        </ul>
                        {submit ? (
                            <div className="flex items-center justify-center mt-4">
                                <p className="text-main-gray text-sm">Başarıyla bültenimize kayıt oldunuz!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="items-center flex flex-col justify-center mt-4">
                                <div className="flex">
                                    <span className="material-icons-round inline-flex items-center px-2 text-lg text-main-blue bg-main-gray-2 rounded-l-md">
                                        mail
                                    </span>
                                    <input {...register("email")}
                                        placeholder="example@gmail.com"
                                        className="focus:outline-none bg-main-gray-2 placeholder-main-black p-1 rounded-r-md text-sm"/>
                                </div>
                                {errors.email && <span className="text-white font-light text-[12px]">{errors.email.message}</span>}
                                <button type="submit" className="bg-main-blue px-2 py-1 font-semibold text-white mt-2 rounded-md">Bültene Kayıt Ol</button>
                            </form>
                        )}
                    </div>
                    <div className="w-1/4 px-4 max-med:w-1/2 max-small:w-full max-small:mb-[30px] max-med:mb-[20px]">
                        <h4 className="font-semibold text-[24px] ml-6 text-white">İletişim</h4>
                        <hr className="w-1/5 bg-main-blue h-[2px] border-none ml-6 mb-3" />
                        <ul className="text-main-gray text-sm">
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm mr-2">location_on</i>
                                İstanbul, Ataşehir
                            </li>
                            <li className="items-start flex my-1">
                                <i className="material-icons-round text-main-blue text-sm mr-2">phone</i>
                                +90 534 432 60 01 <br/> +90 549 828 45 01
                            </li>
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm mr-2">email</i>
                                info@yesilbilisim.com
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/4 px-4 max-med:w-1/2 max-small:w-full max-small:mb-[10px]">
                        <h4 className="font-semibold text-[24px] ml-6 text-white">Sosyal Medya</h4>
                        <hr className="w-1/5 bg-main-blue h-[2px] border-none ml-6 mb-3" />
                        <ul className="text-main-gray text-sm">
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm mr-2">arrow_forward_ios</i>
                                <a href="https://www.linkedin.com/company/yesilbilisim">LinkedIn</a>
                            </li>
                            <li className="items-center flex my-1">
                                <i className="material-icons-round text-main-blue text-sm mr-2">arrow_forward_ios</i>
                                <a href="https://medium.com/@emre.sahna">Medium</a>
                            </li>
                            <a href="/">
                                <img src="http://localhost:8080/img/logo/logo.png" className="w-fit my-4 max-small:hidden" alt="" />
                            </a>
                        </ul>
                    </div>
                </div>
                <hr className="border-main-blue border-[1px] my-4 w-8/12 mx-auto max-small:w-full" />
                <div className="justify-center flex">
                    <span className="text-white text-sm text-center">Yeşil Bilişim, Bireysel ve kurumsal şirketlerin bilişim ihtiyaçlarını karşılayan güvenilir bir çözüm ortağıdır.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;