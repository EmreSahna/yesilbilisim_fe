import http from "../../http-common";
import { IDescriptionalImage } from "./types";

const getHomepage = () => {
    return http.get<(IDescriptionalImage)[]>('/image/homepage');
};

const HomeService = {
    getHomepage
};
  
export default HomeService;