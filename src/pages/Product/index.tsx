import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailService from "./ProductDetailService";
import { IProduct } from "./types";
import { IBrand, ICategory } from "../Products/types";
import ProductCarousel from "./components/slider";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>({} as IProduct);
    const [category, setCategory] = useState<ICategory>({} as ICategory);
    const [brand, setBrand] = useState<IBrand>({} as ICategory);
    
    useEffect(() => {
        ProductDetailService.getProductDetailPage(id).then((res) => {
            setProduct(res.data);
            setCategory(res.data.category);
            setBrand(res.data.brand);
            document.title = res.data.brand.name +" "+ res.data.name + " | Yeşil Bilişim";
        });
    }, [id]);
    
    return (
        <>
            <div className="max-w-[1170px] mx-auto my-[50px]">
                <div className="flex items-center justify-center">
                    <div className="w-1/2 p-[10px]">
                        <div className="bg-main-blue p-[10px] rounded-lg">
                            <ProductCarousel slider={product.images} />
                        </div>
                    </div>
                    <div className="w-1/2 p-[10px] flex flex-col justify-start items-start">
                        <div className="bg-main-gray p-[10px] rounded-lg mb-2">
                            <h1 className="font-medium text-[24px]"><span className="text-main-blue font-semibold">{brand.name}</span> {product.name} - {category.name}</h1>
                            <p className="text-[20px]">{product.description}</p>
                            <p className="font-semibold text-[24px]">{Intl.NumberFormat('tr-TR',{style: 'currency', currency:'TRY'}).format(product.price)}</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px] mt-1" type="button">
                                <span className="text-[16px] font-semibold">Satın Al</span>
                                <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">shopping_cart</i>
                            </button>
                        </div>
                    </div>  
                </div>     
            </div>
        </>
    );
};

export default Product;