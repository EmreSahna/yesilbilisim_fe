import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardService from "./DashboardService";

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
                    <h1 className="text-main-blue font-semibold text-[20px]">
                        Admin Dashboard
                    </h1>
                    <div className="p-4 bg-main-gray rounded w-fit flex items-center gap-[10px]">
                        <p>Email listesini indir</p>    
                        <button className="bg-main-blue p-2 text-white rounded" onClick={handleFileDownload} disabled={downloading}>
                            İndir
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
export default AdminDashboard;