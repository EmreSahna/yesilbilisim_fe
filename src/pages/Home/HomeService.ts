import http from "../../http-common";
import IImage from "./types";

const getAll = () => {
    return http.get<IImage[]>('/image/logos');
};

const HomeService = {
    getAll
};
  
export default HomeService;