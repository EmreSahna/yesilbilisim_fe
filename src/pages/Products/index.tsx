import React, { useEffect, useState } from "react";
import ProductService from "./ProductService";
import { IBrand, ICategory, IProductCard, IProductFilterState, IProductPage } from "./types";

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
    };

    const pageItemCount = 1;
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [page, setPage] = useState<IProductPage>(initialPage);

    const [products, setProducts] = useState<IProductCard[]>([]);

    const [brands, setBrands] = useState<IBrand[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [maxPrice, setMaxPrice] = useState<number>(0);

    const [filterPrice, setFilterPrice] = useState<number>(0);

    const [filter, setFilter] = useState<IProductFilterState>(initialFilter);

    const defaultPage = () => {
        ProductService.getProductsPage(currentPage,pageItemCount).then((res) => {
            setPage(res.data);
            setProducts(res.data.products);
        });
    }

    const resetPage = () => {
        defaultPage();
        clearFilter();
    }

    const clearFilter = () => {
        setFilter({
            brands: [],
            categories: [],
            maxPrice: 0
        });

        const categories = document.getElementsByName("category") as NodeListOf<HTMLInputElement>;
        const brands = document.getElementsByName("brand") as NodeListOf<HTMLInputElement>;

        categories.forEach((category) => {
            category.checked = false;
        });

        brands.forEach((brand) => {
            brand.checked = false;
        });

        setFilterPrice(0);
    }

    useEffect(() => {
        document.title = "Ürünler | Yeşil Bilişim";
        defaultPage();
        ProductService.getProductsFilter().then((res) => {
            setBrands(res.data.brands);
            setCategories(res.data.categories);
            setMaxPrice(res.data.maxPrice);
        });
    }, [])

    const nextPage = () => {
        if(page.currentPage < page.totalPages-1){
            if(filter.brands.length > 0 || filter.categories.length > 0 || filter.maxPrice > 0){
                getProductsWithFilter(page.currentPage + 1,pageItemCount,filter);
            }else{
                ProductService.getProductsPage(page.currentPage + 1,pageItemCount).then((res) => {
                    setPage(res.data);
                    setProducts(res.data.products);
                });
            }
        }
    }

    const prevPage = () => {
        if(page.currentPage > 0){
            if(filter.brands.length > 0 || filter.categories.length > 0 || filter.maxPrice > 0){
                getProductsWithFilter(page.currentPage - 1,pageItemCount,filter);
            }else{
                ProductService.getProductsPage(page.currentPage - 1,pageItemCount).then((res) => {
                    setPage(res.data);
                    setProducts(res.data.products);
                });
            }
        }
    }

    const getProductsWithFilter = (p: number, s: number, f: IProductFilterState) => {
        ProductService.getProductsPage(p,s,f).then((res) => {
            setPage(res.data);
            setProducts(res.data.products);
        });
    }

    const filterProducts = () => {
        setCurrentPage(0);
        getProductsWithFilter(currentPage, pageItemCount, filter);
    }

    const doFilterCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "brand"){
            if(e.target.checked){
                filter.brands.push(e.target.id);
            }else{
                filter.brands = filter.brands.filter((brand) => brand !== e.target.id);
            }
        }else if(e.target.name === "category"){
            if(e.target.checked){
                filter.categories.push(e.target.id);
            }else{
                filter.categories = filter.categories.filter((category) => category !== e.target.id);
            }
        }
        filterProducts();
    }

    const doFilterPrice = (e: React.MouseEvent<HTMLInputElement>) => {
        filter.maxPrice = Number(e.currentTarget.value);
        filterProducts();
    }

    const changePriceVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterPrice(Number(e.target.value));
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
                                        <input type="checkbox" id={category.name} name="category" onChange={doFilterCheckBox}/>
                                        <label htmlFor={category.name} className="ml-1">{category.name}</label>
                                    </div>
                                ))}
                                
                            </div>
                            <div className="border-2 border-main-blue rounded-md mb-4 py-2 px-1">
                                <p className="font-semibold ml-2">Marka</p>
                                <hr className="my-1" />
                                {brands.map((brand) => (
                                    <div className="px-2">
                                        <input type="checkbox" id={brand.name} name="brand" onChange={doFilterCheckBox}/>
                                        <label htmlFor={brand.name} className="ml-1">{brand.name}</label>
                                    </div>    
                                ))}
                            </div>
                            <div className="border-2 border-main-blue rounded-md mb-4 py-2 px-1">
                                <p className="font-semibold ml-2">Fiyat Aralığı</p>
                                <hr className="my-1" />
                                <div className="flex items-center justify-center w-min">
                                    <input type="range" id="price" name="price" min="0" value={filterPrice}  max={maxPrice} onChange={changePriceVal} onMouseUp={doFilterPrice} />
                                    <label htmlFor="price" id="price-range">{filterPrice}</label>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className="flex items-center text-main-blue py-2 px-4 rounded-[10px] mt-1" type="button"
                                onClick={resetPage}>
                                    <span className="text-[16px] font-semibold">Filtreleri Temizle</span>
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
                            <button className="flex items-center text-main-blue py-2 px-4 rounded-[10px] mt-1" type="button"
                            onClick={prevPage}>
                                <i className="material-icons-round text-main-black text-[20px] font-semibold mr-1">arrow_back</i>
                                <span className="text-[16px] font-semibold">Önceki</span>
                            </button>
                            <button className="flex items-center text-main-blue py-2 px-4 rounded-[10px] mt-1 ml-2" type="button"
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