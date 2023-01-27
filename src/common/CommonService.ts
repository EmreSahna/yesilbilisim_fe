import http from "../http-common";
import { IEmail } from "./types";

const registerNews = (data: IEmail) => {
    return http.post<IEmail>('/email/register', data);
};

const CommonService = {
    registerNews
};
  
export default CommonService;