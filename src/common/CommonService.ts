import http from "../http-common";
import { IBlogNavigator, IEmail } from "./types";

const registerNews = (data: IEmail) => {
    return http.post<IEmail>('/email/register', data);
};

const blogNavigator = () => {
    return http.get<IBlogNavigator[]>('/blog/navigator');
};

const CommonService = {
    registerNews,
    blogNavigator
};
  
export default CommonService;