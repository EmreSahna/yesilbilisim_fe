import http from "../../http-common";
import { IsValid } from "./types";

const validateToken = (token: string | null) => {
    return http.get<IsValid>('/login/validate', {headers: { Authorization: `Bearer ${token}` }});
};

const DashboardService = {
    validateToken
};
  
export default DashboardService;