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

        console.log("token have");

        const validateToken = async () => {
            try{
                const response = await DashboardService.validateToken(token);
                console.log("token have 2");
                if(!response.data.valid) {
                    localStorage.removeItem("token");
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
                <h1>
                    Admin Dashboard
                </h1>
            )}
        </>
    );
};
export default AdminDashboard;