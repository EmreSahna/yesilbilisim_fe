import http from "../../http-common";
import { ISolution } from "./types";

const getSolutionpageById = (blogId?: string) => {
    return http.get<ISolution>('/view/card/'+blogId);
};

const SolutionpageService = {
    getSolutionpageById
};
  
export default SolutionpageService;