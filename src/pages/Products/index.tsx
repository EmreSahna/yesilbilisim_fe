import { useEffect, useState } from "react";
import ProductService from "./ProductService";
import { IProduct, IProductPage } from "./types";

const Products = () => {
    const initialPage = {
        currentPage: 0,
        totalPages: 0,
        totalElements: 0,
        products: []
    };

    const [page, setPage] = useState<IProductPage>(initialPage);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        document.title = "Ürünler | Yeşil Bilişim";
        ProductService.getProductsPage(0,1).then((res) => {
            setPage(res.data);
            setProducts(res.data.products);
            console.log(res.data); 
        });
    }, [])
    return (
        <>
            <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
                <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                </ul>
                <p className="text-white font-bold text-[28px]">Ürünlerimiz</p>
            </div>
            <div className="grid grid-cols-5 my-4 max-w-[1170px] mx-auto">
                <div className="col-span-1 m-2 rounded-lg h-fit border border-black border-opacity-20">
                    <div className="px-4 my-4">
                        <p className="text-center font-semibold">8 Ürün listeleniyor</p>
                    </div>
                    <hr />
                    <div className="px-4 my-4 text-left">
                        <p className="font-semibold mb-2">Filtrele</p>
                        <div className="border-2 border-main-blue rounded-md mb-4">
                            <p className="font-semibold ml-2 mt-2 mb-2">Kategori</p>
                            <hr className="my-2" />
                            <div className="px-2">
                                <input type="checkbox" id="bes" name="bes" />
                                <label htmlFor="bes" className="ml-1">Elektronik</label>
                            </div>
                            <div className="px-2">
                                <input type="checkbox" id="on" name="on" />
                                <label htmlFor="on" className="ml-1">Giyim</label>
                            </div>
                            <div className="px-2 mb-2">
                                <input type="checkbox" id="yir" name="yir" />
                                <label htmlFor="yir" className="ml-1">Beyaz Eşya</label>
                            </div>
                        </div>
                        <div className="border-2 border-main-blue rounded-md mb-4">
                            <p className="font-semibold ml-2 mt-2">Marka</p>
                            <hr className="my-2" />
                            <div className="px-2">
                                <input type="checkbox" id="samsung" name="samsung" />
                                <label htmlFor="samsung" className="ml-1">Samsung</label>
                            </div>
                            <div className="px-2">
                                <input type="checkbox" id="apple" name="apple" />
                                <label htmlFor="apple" className="ml-1">Apple</label>
                            </div>
                            <div className="px-2 mb-2">
                                <input type="checkbox" id="lenovo" name="lenovo" />
                                <label htmlFor="lenovo" className="ml-1">Lenovo</label>
                            </div>
                        </div>
                        <div className="border-2 border-main-blue rounded-md mb-4">
                            <p className="font-semibold ml-2 mt-2 mb-2">Fiyat Aralığı</p>
                            <hr className="my-2" />
                            <div className="px-2">
                                <input type="checkbox" id="bes" name="bes" />
                                <label htmlFor="bes" className="ml-1">0-5000</label>
                            </div>
                            <div className="px-2">
                                <input type="checkbox" id="on" name="on" />
                                <label htmlFor="on" className="ml-1">5000-10000</label>
                            </div>
                            <div className="px-2 mb-2">
                                <input type="checkbox" id="yir" name="yir" />
                                <label htmlFor="yir" className="ml-1">10000-20000</label>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px] mt-1" type="button">
                                <span className="text-[16px] font-semibold">Filtre Uygula</span>
                                <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-3 items-center gap-4 my-4">
                    {products && 
                        products.map((product, index) => {
                            return (
                                <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product" key={index}>
                                    <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                                        <img src={`http://localhost:8080/img/${product.images[0].folder}/${product.images[0].filename}`} className="w-full" alt="" />
                                    </div>
                                    <h3 className="font-semibold mt-[10px] text-black">{product.brand.name} {product.name}</h3>
                                    <p>{product.description}</p>
                                    <p className="font-bold text-black text-[22px] mt-[5px] text-left">{product.price}TL</p>
                                    <div className="flex justify-end mt-2">
                                        <button className="flex items-center bg-main-blue text-white py-2 px-3 rounded-[10px] mt-1" type="button">
                                            <span className="text-[12px] font-semibold">Ürüne Git</span>
                                            <i className="material-icons-round text-main-black text-[12px] font-semibold ml-1">arrow_forward</i>
                                        </button>
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </div>
        </>
    );
};

export default Products;