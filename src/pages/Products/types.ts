export interface IProduct {
    name: string;
    brand: IBrand;
    price: number;
    description: string;
    images: IImage[];
}

export interface IProductPage {
    currentPage: number;
    totalElements: number;
    totalPages: number;
    products: IProduct[];
}

export interface IImage{
    folder: string;
    filename: string;
}

export interface IBrand{
    name: string;
}