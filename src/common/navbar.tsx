function navbar(this: any) {
    return (
    <nav className="bg-white flex h-16 w-full items-center">
        <a href="/" className="mr-auto my-3 ml-5">
            <img src="http://localhost:8080/img/logo/logo.png" className="w-[200px] mx-auto" alt="yesilbilisim" />
        </a>
        <div className="hidden lg:flex items-center justify-center">
            <ul className="flex items-center justify-center w-full text-black font-semibold text-[16px]">
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="/">Anasayfa</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="/hakkimizda">Hakkımızda</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="/urunler">Ürünlerimiz</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="/blog">Blog</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="/hizmetler">Çözümlerimiz</a>
                </li>
            </ul>
        </div>
        <button className="hidden lg:flex items-center text-white font-semibold text-[14px] bg-main-blue rounded-lg mr-5 my-3 ml-auto px-5 py-2">
            <a href="/iletisim" className="">
                İletişime Geç
            </a>
        </button>
    </nav>
  )
}

export default navbar;