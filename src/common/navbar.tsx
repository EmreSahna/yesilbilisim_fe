function navbar() {
  return (
    <nav className="bg-white flex h-16 w-full">
        <div className="flex items-center justify-center w-1/4">
            <a href="/">
                <img src="http://localhost:8080/img/logo/logo.png" className="w-[200px]" alt="yesilbilisim" />
            </a>
        </div>
        <div className="flex items-center justify-center w-2/4">
            <ul className="flex items-center justify-center w-full text-black font-semibold text-[16px]">
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="/">Anasayfa</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="/hakkimizda">Hakkımızda</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="#">Ürünlerimiz</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="#">Blog</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="#">Çözümlerimiz</a>
                </li>
            </ul>
        </div>
        <div className="flex items-center ml-auto pr-4">
            <button className="text-white font-semibold text-[14px] bg-main-blue rounded-lg px-5 py-2 mx-4 ">
                <a href="/iletisim" className="">
                    İletişime Geç
                </a>
            </button>
        </div>
    </nav>
  )
}

export default navbar;