import http from "../../http-common";
import { ICard } from "./types";

const getSolutionpage = () => {
    return http.get<(ICard)[]>('/view/services');
};

const SolutionService = {
    getSolutionpage
};
  
export default SolutionService;