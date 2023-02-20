import http from "../../http-common";
import { IsValid } from "./types";

const validateToken = (token: string | null) => {
    return http.get<IsValid>('/admin/isvalid', {headers: { Authorization: `Bearer ${token}` }});
};

const getMails = (token: string | null) => {
    return http.get('/admin/mail', {headers: { Authorization: `Bearer ${token}` }});
};

const DashboardService = {
    validateToken,
    getMails
};
  
export default DashboardService;