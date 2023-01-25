import http from "../../http-common";
import { IDescriptionalImage } from "./types";

const getSolutionpage = () => {
    return http.get<(IDescriptionalImage)[]>('/image/solutionpage');
};

const SolutionService = {
    getSolutionpage
};
  
export default SolutionService;