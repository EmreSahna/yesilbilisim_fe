import { useEffect, useState } from "react";
import ProductService from "./ProductService";
import { IBrand, ICategory, IProductCard, IProductFilter, IProductPage } from "./types";

const Products = () => {
    const initialPage = {
        currentPage: 0,
        totalPages: 0,
        totalElements: 0,
        products: []
    };

    const initialFilter = {
        brands: [],
        categories: [],
        maxPrice: 0
    }

    const pageItemCount = 2;
    const currentPage = 0;

    const [page, setPage] = useState<IProductPage>(initialPage);
    const [products, setProducts] = useState<IProductCard[]>([]);
    const [brands, setBrands] = useState<IBrand[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [maxPrice, setMaxPrice] = useState<number>(0);

    useEffect(() => {
        document.title = "Ürünler | Yeşil Bilişim";
        ProductService.getProductsPage(currentPage,pageItemCount).then((res) => {
            setPage(res.data);
            setProducts(res.data.products);
        });

        ProductService.getProductsFilter().then((res) => {
            setBrands(res.data.brands);
            setCategories(res.data.categories);
            setMaxPrice(res.data.maxPrice);
        });
    }, [])

    const nextPage = () => {
        if(page.currentPage < page.totalPages){
            ProductService.getProductsPage(page.currentPage + 1,pageItemCount).then((res) => {
                setPage(res.data);
                setProducts(res.data.products);
                console.log(res.data);
            });
        }
    }

    const prevPage = () => {
        if(page.currentPage > 0){
            ProductService.getProductsPage(page.currentPage - 1,pageItemCount).then((res) => {
                setPage(res.data);
                setProducts(res.data.products);
                console.log(res.data);
            });
        }
    }

    const updatePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        document.getElementById("price-range")!.innerHTML = e.target.value;
    }

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
            <div className="flex my-4 max-w-[1170px] mx-auto flex-wrap">
                <div className="w-1/5 h-fit max-med:w-full p-2">
                    <div className="rounded-lg border-black border-opacity-20 border">
                        <div className="px-4 my-4">
                            <p className="text-center font-semibold">{page.totalElements} Ürün listeleniyor</p>
                        </div>
                        <hr />
                        <div className="px-4 my-4 text-left">
                            <p className="font-semibold mb-2">Filtrele</p>
                            <div className="border-2 border-main-blue rounded-md mb-4 py-2 px-1">
                                <p className="font-semibold ml-2">Kategori</p>
                                <hr className="my-1" />
                                {categories.map((category) => (
                                    <div className="px-2">
                                        <input type="checkbox" id={category.name} name={category.name} />
                                        <label htmlFor={category.name} className="ml-1">{category.name}</label>
                                    </div>
                                ))}
                                
                            </div>
                            <div className="border-2 border-main-blue rounded-md mb-4 py-2 px-1">
                                <p className="font-semibold ml-2">Marka</p>
                                <hr className="my-1" />
                                {brands.map((brand) => (
                                    <div className="px-2">
                                        <input type="checkbox" id={brand.name} name={brand.name} />
                                        <label htmlFor={brand.name} className="ml-1">{brand.name}</label>
                                    </div>    
                                ))}
                            </div>
                            <div className="border-2 border-main-blue rounded-md mb-4 py-2 px-1">
                                <p className="font-semibold ml-2">Fiyat Aralığı</p>
                                <hr className="my-1" />
                                <div className="flex items-center justify-center w-min">
                                    <input type="range" id="price" name="price" min="0" max={maxPrice} onChange={updatePrice} />
                                    <label htmlFor="price" id="price-range"></label>
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
                </div>
                <div className="w-4/5 items-start flex justify-start flex-wrap max-med:w-full">
                    {products && 
                        products.map((product, index) => {
                        return (
                            <div className="w-1/3 p-[10px] max-med:w-1/2 max-small:w-full">
                                <a href={`urunler/${product.id}`}>
                                    <div className="p-[20px] bg-main-gray rounded-lg shadow-product h-full flex-col flex justify-between" key={index}>
                                        <div className="flex items-center h-[240px] bg-white rounded-md overflow-hidden">
                                            <img src={`http://localhost:8080/img/${product.image.folder}/${product.image.filename}`} className="w-full" alt="" />
                                        </div>
                                        <h3 className="font-medium mt-[10px] text-black text-[18px] line-clamp-3 h-[81px]"><span className="font-semibold">{product.brand.name}</span> {product.name} {product.description}</h3>
                                        <p className="font-bold text-main-blue text-[22px] mt-[5px] text-left">{Intl.NumberFormat('tr-TR',{style: 'currency', currency:'TRY'}).format(product.price)}</p>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-center mx-auto items-center">
                    {page.totalPages > 1 &&
                        <div className="flex justify-center">
                            <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px] mt-1" type="button"
                            onClick={prevPage}>
                                <i className="material-icons-round text-main-black text-[20px] font-semibold mr-1">arrow_back</i>
                                <span className="text-[16px] font-semibold">Önceki</span>
                            </button>
                            <button className="flex items-center bg-main-blue text-white py-2 px-4 rounded-[10px] mt-1 ml-2" type="button"
                            onClick={nextPage}>
                                <span className="text-[16px] font-semibold">Sonraki</span>
                                <i className="material-icons-round text-main-black text-[20px] font-semibold ml-1">arrow_forward</i>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Products;