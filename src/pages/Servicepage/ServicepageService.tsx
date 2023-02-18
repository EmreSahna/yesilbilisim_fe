import http from "../../http-common";
import { IService } from "./types";

const getServicepageById = (blogId?: string) => {
    return http.get<IService>('/view/card/'+blogId);
};

const ServicepageService = {
    getServicepageById
};
  
export default ServicepageService;