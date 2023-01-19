import http from "../../http-common";
import { IDescriptionalImage, IImage } from "./types";

const getSlider = () => {
    return http.get<IImage[]>('/image/slider');
};

const getHomepage = () => {
    return http.get<(IDescriptionalImage)[]>('/image/homepage');
};

const HomeService = {
    getSlider,
    getHomepage
};
  
export default HomeService;