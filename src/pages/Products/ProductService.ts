import http from "../../http-common";
import { IProduct } from "./types";

const getProductsPage = (page: number, size: number) => {
    return http.get<(IProduct)[]>('/product/page', {params: {page, size}});
};

const ProductService = {
    getProductsPage
};
  
export default ProductService;