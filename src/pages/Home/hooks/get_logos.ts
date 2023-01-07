import axios from "axios";
import { IImage } from "../model";

export async function getLogos(){
    try {
        const res = await axios.get(`http://localhost:8080/image/logos`);
        const logos:IImage[] = res.data;
        return logos;
    } catch (error) {
        console.error(error);
    }
}