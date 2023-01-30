import http from "../../http-common";
import { IProductFilter, IProductPage } from "./types";

const getProductsPage = (page: number, size: number) => {
    return http.get<IProductPage>('/product/page', {params: {page, size}});
};

const getProductsFilter = () => {
    return http.get<IProductFilter>('/product/filter-menu');
};

const ProductService = {
    getProductsPage,
    getProductsFilter
};
  
export default ProductService;