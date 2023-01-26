import http from "../http-common";

const registerNews = (data: string) => {
    return http.post<string>('/email/register', data);
};

const CommonService = {
    registerNews
};
  
export default CommonService;