import http from "../../http-common";
import { IHomePage } from "./types";

const getHomepage = () => {
    return http.get<IHomePage>('/view/homepage');
};

const HomeService = {
    getHomepage
};
  
export default HomeService;