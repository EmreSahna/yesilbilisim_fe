const Navbar = () => {

    const hamburgerMenu = () => {
        document.querySelector('#navbar')?.classList.toggle('max-med:-left-full');
        document.querySelector('#navbar')?.classList.toggle('max-med:left-0');
    }

    return (
    <nav className="bg-white flex h-16 w-full items-center max-w-[1170px] mx-auto justify-center gap-8 max-med:gap-4">
        <a href="/" className="w-[20%] max-med:w-[25%] max-small:w-[50%] h-auto ml-2">
            <img src="http://localhost:8080/img/logo/logo.png" alt="yesilbilisim" />
        </a>
        <ul 
            className="flex items-center justify-center text-black font-semibold text-[16px] gap-6 z-10
                max-med:-left-full max-med:absolute max-med:flex-col max-med:top-16 max-med:w-full max-med:text-center max-med:bg-main-gray-2 max-med:text-main-black max-med:py-2"  
            id="navbar"
        >
            <li className="p-2 max-med:hover:bg-transparent rounded-md">
                <a href="/" className="">Anasayfa</a>
            </li>
            <li className="p-2 max-med:hover:bg-transparent rounded-md">
                <a href="/hakkimizda">Hakkımızda</a>
            </li>
            <li className="p-2 max-med:hover:bg-transparent rounded-md">
                <a href="/urunler">Ürünlerimiz</a>
            </li>
            <li className="p-2 max-med:hover:bg-transparent rounded-md">
                <a href="/blog">Blog</a>
            </li>
            <li className="p-2 max-med:hover:bg-transparent rounded-md">
                <a href="/hizmetler">Hizmetlerimiz</a>
            </li>
            <li className="p-2 max-med:hover:bg-transparent rounded-md">
                <a href="/cozumler">Çözümlerimiz</a>
            </li>
        </ul>
        <div className="flex items-center justify-center h-full max-med:ml-auto">
            <a href="/iletisim">
                <button className="flex justify-center items-center bg-main-blue text-white font-semibold rounded-lg px-2 py-3 text-[14px] max-med:text-[12px]">
                    İletişime Geç
                </button>
            </a>
        </div>
        <button
            className="material-icons-round text-[30px] hidden max-med:inline ml-2 mr-2"
            onClick={hamburgerMenu}>
            menu
        </button>
    </nav>
  )
}

export default Navbar;