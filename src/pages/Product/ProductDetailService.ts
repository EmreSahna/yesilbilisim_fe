import http from "../../http-common";
import { IProduct } from "./types";

const getProductDetailPage = (id?: string) => {
    return http.get<IProduct>('/product/detail/' + id);
};

const ProductDetailService = {
    getProductDetailPage
};
  
export default ProductDetailService;