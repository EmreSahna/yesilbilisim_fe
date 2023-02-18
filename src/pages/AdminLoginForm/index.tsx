import { useEffect, useState } from "react";
import LoginService from "./LoginService";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
        document.title = "Admin Giriş | Yeşil Bilişim";
    }, [])

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    
    const [isDone, setIsDone] = useState(false);

    const handleSubmit = () => {
        LoginService.loginAdmin(formData)
        .then((res) => {
            setIsDone(true);
            localStorage.setItem("token", res.data.token);
            setTimeout(() => {
                navigate("/admin/dashboard");
            }, 3000);
        })
        .catch((err) => {
            setIsDone(false);
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="bg-main-blue h-screen flex items-center justify-center">
            <div className="max-w-[1170px] mx-auto bg-main-gray rounded-lg p-8">
                <h1 className="font-bold text-[20px] text-center">Admin Giriş Paneli</h1>
                <div className="my-2">
                    <label htmlFor="username" className="block text-main-black font-semibold">Kullanıcı Adı</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        className="appearance-none border rounded-md w-full px-3 py-1 text-main-gray-3 leading-tight focus:outline-none" 
                        value={formData.username}
                        onChange={handleChange}    
                    />
                </div>
                <div className="my-2">
                    <label htmlFor="password" className="block text-main-black font-semibold">Şifre</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className="appearance-none border rounded-md w-full px-3 py-1 text-main-gray-3 leading-tight focus:outline-none" 
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-center">
                    <button 
                        className="flex items-center bg-main-blue text-white py-2 px-6 rounded-[10px] mt-3" 
                        type="button"
                        onClick={handleSubmit}
                    >
                        <span className="text-[16px] font-semibold">Giriş Yap</span>
                        <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">login</i>
                    </button>
                </div>
                {isDone ? (
                    <div className="text-center mt-2">
                        <span className="text-main-black">Başarıyla Giriş Yapıldı...</span>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default AdminLoginForm;