import http from "../../http-common";
import { IProductFilter, IProductFilterState, IProductPage } from "./types";

const getProductsPage = (page: number, size: number, options?: IProductFilterState) => {
    return http.post<IProductPage>('/product/page', options, { params: { page, size } });
};

const getProductsFilter = () => {
    return http.get<IProductFilter>('/product/filter-menu');
};

const ProductService = {
    getProductsPage,
    getProductsFilter
};
  
export default ProductService;