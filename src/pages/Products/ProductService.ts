import http from "../../http-common";
import { IProductPage } from "./types";

const getProductsPage = (page: number, size: number) => {
    return http.get<IProductPage>('/product/page', {params: {page, size}});
};

const ProductService = {
    getProductsPage
};
  
export default ProductService;