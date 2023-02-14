import http from "../http-common";
import { IEmail } from "./types";

const registerNews = (data: IEmail) => {
    return http.post<IEmail>('/email/register', data);
};

const blogNavigator = () => {
    return http.get('/blog/navigator');
};

const CommonService = {
    registerNews,
    blogNavigator
};
  
export default CommonService;