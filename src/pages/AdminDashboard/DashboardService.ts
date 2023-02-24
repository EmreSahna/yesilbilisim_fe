import http from "../../http-common";
import { ICreateBlog, IsValid } from "./types";

const validateToken = (token: string | null) => {
    return http.get<IsValid>('/admin/isvalid', {headers: { Authorization: `Bearer ${token}` }});
};

const getMails = (token: string | null) => {
    return http.get('/admin/mail', {headers: { Authorization: `Bearer ${token}` }});
};

const createBlog = (data: ICreateBlog, token: string | null) => {
    return http.post('/admin/blog', data, {headers: { Authorization: `Bearer ${token}` }});
};

const DashboardService = {
    validateToken,
    getMails,
    createBlog
};
  
export default DashboardService;