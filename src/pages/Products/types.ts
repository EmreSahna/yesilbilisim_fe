export interface IProductCard {
    id: number;
    name: string;
    brand: IBrand;
    price: number;
    description: string;
    image: IImage;
}

export interface IProductPage {
    currentPage: number;
    totalElements: number;
    totalPages: number;
    products: IProductCard[];
}

export interface IImage{
    folder: string;
    filename: string;
}

export interface IBrand{
    name: string;
}

export interface ICategory{
    name: string;
}

export interface IProductFilter{
    brands: IBrand[];
    categories: ICategory[];
    maxPrice: number;
}