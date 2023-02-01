import http from "../../http-common";
import { LoginForm, LoginFormResponse } from "./types";

const loginAdmin = (data: LoginForm) => {
    return http.post<LoginFormResponse>('/login/user', data);
};

const LoginService = {
    loginAdmin
};
  
export default LoginService;