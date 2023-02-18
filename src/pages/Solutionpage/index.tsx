import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SolutionpageService from "./SolutionpageService";
import { ISolution } from "./types";

const Solutionpage = () => {
    const { id } = useParams();
    const [solution, setSolution] = useState<ISolution>({} as ISolution);
    
    useEffect(() => {
        SolutionpageService.getSolutionpageById(id).then((res) => {
            setSolution(res.data);
            document.title = res.data.title +" | Yeşil Bilişim";
        });
    }, [id]);

    
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
            <h1>{solution.title}</h1>
            <p>{solution.cardContent}</p>
            </div>
        </div>
        </div>
    );
};

export default Solutionpage;