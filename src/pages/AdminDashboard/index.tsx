import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardService from "./DashboardService";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ICreateBlog } from "./types";
const AdminDashboard = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Admin Dashboard | Yeşil Bilişim";
        const token = localStorage.getItem("token");
        
        if(!token) {
            navigate("/admin/login");
        }

        const validateToken = async () => {
            try{
                const response = await DashboardService.validateToken(token);
                if(response.status !== 200) {
                    localStorage.removeItem("token gecersiz");
                    navigate("/admin/login");
                }
            }catch(err) {
                localStorage.removeItem("token");
                navigate("/admin/login");
            }
            setIsLoading(false);
        }

        validateToken();
    }, [navigate])

    const [downloading, setDownloading] = useState(false);

    const handleFileDownload = async () => {
        const token = localStorage.getItem("token");
        setDownloading(true);
        DashboardService.getMails(token).then((res) => {
            const blob = new Blob([res.data]);
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', 'kayitlar.txt');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).finally(() => {
            setDownloading(false);
        }).catch((error) => {
            console.log(error);
            setDownloading(false);
        });
    };

    const schema = yup.object().shape({
        title: yup.string().required("Başlık alanı boş bırakılamaz"),
        description: yup.string().required("Açıklama alanı boş bırakılamaz"),
        blogContent: yup.string().max(10000, "10000 karakteri geçemez.").required("Blog içeriği alanı boş bırakılamaz"),
        thumbnailImage: yup.string().required("Thumbnail alanı boş bırakılamaz"),
        tags: yup.string().required("Tag alanı boş bırakılamaz"),
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICreateBlog>({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data: ICreateBlog) => {
        const token = localStorage.getItem("token");
        DashboardService.createBlog(data, token).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        //reset();
    };

    return (
        <>
            {isLoading ? (
                <div className="bg-main-blue h-screen flex justify-center items-center">
                    <div className="max-w-[1170px] mx-auto">
                        <p className="text-main-gray">
                            Loading...
                        </p>
                    </div>
                </div>
            ):(
                <div className="max-w-[1170px] mx-auto my-[50px] flex flex-col gap-[30px]">
                    <h1 className="text-main-blue font-semibold text-[22px]">
                        Admin Dashboard
                    </h1>
                    <div className="p-4 bg-main-gray rounded w-fit flex items-center gap-[10px]">
                        <p>Email listesini indir</p>    
                        <button className="bg-main-blue p-2 text-white rounded" onClick={handleFileDownload} disabled={downloading}>
                            İndir
                        </button>
                    </div>
                    <div className="bg-main-gray rounded w-[50%] p-4">
                        <p className="text-main-black text-[20px]">Blog Ekle</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                    Başlık
                                </label>
                                <input 
                                    {...register("title")}
                                    className="appearance-none border w-full rounded-md py-3 px-3 text-main-gray-3 leading-tight focus:outline-none"
                                />
                                {errors.title && <span className="text-red-700 font-light text-[12px]">{errors.title.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                    Açıklama
                                </label>
                                <input 
                                    {...register("description")}
                                    className="appearance-none border w-full rounded-md py-3 px-3 text-main-gray-3 leading-tight focus:outline-none"
                                />
                                {errors.description && <span className="text-red-700 font-light text-[12px]">{errors.description.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                    Blog
                                </label>
                                <textarea 
                                    {...register("blogContent")}
                                    className="appearance-none border w-full rounded-md py-3 px-3 text-main-gray-3 leading-tight focus:outline-none"
                                />
                                {errors.blogContent && <span className="text-red-700 font-light text-[12px]">{errors.blogContent.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                    Image
                                </label>
                                <input 
                                    {...register("thumbnailImage")}
                                    className="appearance-none border w-full rounded-md py-3 px-3 text-main-gray-3 leading-tight focus:outline-none"
                                />
                                {errors.thumbnailImage && <span className="text-red-700 font-light text-[12px]">{errors.thumbnailImage.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-main-gray-3 text-sm font-semibold mb-2">
                                    Tags
                                </label>
                                <input 
                                    {...register("tags")}
                                    className="appearance-none border w-full rounded-md py-3 px-3 text-main-gray-3 leading-tight focus:outline-none"
                                />
                                {errors.tags && <span className="text-red-700 font-light text-[12px]">{errors.tags.message}</span>}
                            </div>
                            <button type="submit" className="bg-main-blue p-2 text-white rounded">
                                Bloğu Kaydet   
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
export default AdminDashboard;