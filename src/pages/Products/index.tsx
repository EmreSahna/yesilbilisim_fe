const Products = () => {  
    return (
        <div>
            <div className="h-auto bg-main-blue flex justify-center py-6 flex-col items-center">
                <img src="http://localhost:8080/img/logo/logo_2.png" className="h-[100px] mb-2" alt="" />
                <ul className="my-4">
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                    <li className="h-[16px] w-[16px] bg-white rounded-full mx-2 inline-block"/>
                </ul>
                <p className="text-white font-bold text-[28px]">Ürünlerimiz</p>
            </div>
            <div className="grid grid-cols-5 my-4">
                <div className="col-span-1 m-2 rounded-lg h-fit border border-black border-opacity-20">
                    <div className="px-4 my-4">
                        <p className="text-center font-semibold">8 Ürün listeleniyor</p>
                    </div>
                    <hr />
                    <div className="px-4 my-4 text-left">
                        <p className="font-semibold ml-1 mb-2">Ürün Ara</p>
                        <input className="border-2 focus:border-main-blue border-main-gray-2 rounded-md appearance-none focus:outline-none leading-tight p-1" type="text" placeholder="Macbook Pro..."/>
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
                            <button className="flex items-center bg-main-blue text-white py-1 px-3 rounded-xl" type="button">
                                <span className="text-[16px] font-semibold">Filtre Uygula</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[20px] ml-2 mt-1">¥</i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-3 items-center gap-4 my-4">
                    <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product">
                        <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                            <img src="urun_1.jfif" className="w-full" alt="" />
                        </div>
                        <h3 className="font-semibold mt-[10px] text-black">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</h3>
                        <p className="font-bold text-black text-[22px] mt-[5px] text-left">10.999TL</p>
                        <div className="flex justify-end mt-2">
                            <button className="flex items-center bg-main-blue text-white py-1 px-2 rounded-lg" type="button">
                                <span className="text-[12px] font-semibold text-white">Ürüne Git</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[12px] ml-2 mt-0.5">¥</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product">
                        <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                            <img src="urun_1.jfif" className="w-full" alt="" />
                        </div>
                        <h3 className="font-semibold mt-[10px] text-black">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</h3>
                        <p className="font-bold text-black text-[22px] mt-[5px] text-left">10.999TL</p>
                        <div className="flex justify-end mt-2">
                            <button className="flex items-center bg-main-blue text-white py-1 px-2 rounded-lg" type="button">
                                <span className="text-[12px] font-semibold text-white">Ürüne Git</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[12px] ml-2 mt-0.5">¥</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product">
                        <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                            <img src="urun_1.jfif" className="w-full" alt="" />
                        </div>
                        <h3 className="font-semibold mt-[10px] text-black">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</h3>
                        <p className="font-bold text-black text-[22px] mt-[5px] text-left">10.999TL</p>
                        <div className="flex justify-end mt-2">
                            <button className="flex items-center bg-main-blue text-white py-1 px-2 rounded-lg" type="button">
                                <span className="text-[12px] font-semibold text-white">Ürüne Git</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[12px] ml-2 mt-0.5">¥</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product">
                        <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                            <img src="urun_1.jfif" className="w-full" alt="" />
                        </div>
                        <h3 className="font-semibold mt-[10px] text-black">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</h3>
                        <p className="font-bold text-black text-[22px] mt-[5px] text-left">10.999TL</p>
                        <div className="flex justify-end mt-2">
                            <button className="flex items-center bg-main-blue text-white py-1 px-2 rounded-lg" type="button">
                                <span className="text-[12px] font-semibold text-white">Ürüne Git</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[12px] ml-2 mt-0.5">¥</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product">
                        <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                            <img src="urun_1.jfif" className="w-full" alt="" />
                        </div>
                        <h3 className="font-semibold mt-[10px] text-black">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</h3>
                        <p className="font-bold text-black text-[22px] mt-[5px] text-left">10.999TL</p>
                        <div className="flex justify-end mt-2">
                            <button className="flex items-center bg-main-blue text-white py-1 px-2 rounded-lg" type="button">
                                <span className="text-[12px] font-semibold text-white">Ürüne Git</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[12px] ml-2 mt-0.5">¥</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product">
                        <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                            <img src="urun_1.jfif" className="w-full" alt="" />
                        </div>
                        <h3 className="font-semibold mt-[10px] text-black">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</h3>
                        <p className="font-bold text-black text-[22px] mt-[5px] text-left">10.999TL</p>
                        <div className="flex justify-end mt-2">
                            <button className="flex items-center bg-main-blue text-white py-1 px-2 rounded-lg" type="button">
                                <span className="text-[12px] font-semibold text-white">Ürüne Git</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[12px] ml-2 mt-0.5">¥</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product">
                        <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                            <img src="urun_1.jfif" className="w-full" alt="" />
                        </div>
                        <h3 className="font-semibold mt-[10px] text-black">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</h3>
                        <p className="font-bold text-black text-[22px] mt-[5px] text-left">10.999TL</p>
                        <div className="flex justify-end mt-2">
                            <button className="flex items-center bg-main-blue text-white py-1 px-2 rounded-lg" type="button">
                                <span className="text-[12px] font-semibold text-white">Ürüne Git</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[12px] ml-2 mt-0.5">¥</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 w-fit h-fit p-[20px] bg-main-gray rounded-lg shadow-product">
                        <div className="relative h-[240px] py-[20px] bg-white rounded-md">
                            <img src="urun_1.jfif" className="w-full" alt="" />
                        </div>
                        <h3 className="font-semibold mt-[10px] text-black">MacBook Air 13. 6 inç M2 8C 10GPU 8GB RAM 512GB SSD Gece Yarısı (MLY43TU/A)</h3>
                        <p className="font-bold text-black text-[22px] mt-[5px] text-left">10.999TL</p>
                        <div className="flex justify-end mt-2">
                            <button className="flex items-center bg-main-blue text-white py-1 px-2 rounded-lg" type="button">
                                <span className="text-[12px] font-semibold text-white">Ürüne Git</span>
                                <i className="font-arrow not-italic rotate-90 inline-block text-main-black text-[12px] ml-2 mt-0.5">¥</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;