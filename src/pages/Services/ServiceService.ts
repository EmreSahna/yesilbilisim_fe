import http from "../../http-common";
import { ICard } from "./types";

const getSolutionpage = () => {
    return http.get<(ICard)[]>('/view/services');
};

const ServiceService = {
    getSolutionpage
};
  
export default ServiceService;