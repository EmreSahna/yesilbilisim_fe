import http from "../../http-common";
import IContactForm from "./types";

const sendForm = (data: IContactForm) => {
    return http.post<IContactForm>('/contact/save', data);
};

const ContactService = {
    sendForm
};
  
export default ContactService;