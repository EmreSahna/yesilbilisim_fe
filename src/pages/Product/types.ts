import { IBrand, ICategory } from "../Products/types";

export interface IProduct {
    name: string;
    brand: IBrand;
    price: number;
    description: string;
    images: IImage[];
    category: ICategory;
}

export interface IImage {
    id: string;
    filename: string;
    folder: string;
}