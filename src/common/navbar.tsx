const Navbar = () => {

    const hamburgerMenu = () => {
        document.querySelector('#navbar')?.classList.toggle('max-med:-left-full');
        document.querySelector('#navbar')?.classList.toggle('max-med:left-0');
    }

    return (
    <nav className="bg-white flex h-16 w-full items-center max-w-[1170px] mx-auto justify-center gap-6">
        <a href="/" className="w-[20%] max-med:w-[25%] max-small:w-[50%] h-auto ml-2">
            <img src="http://192.168.1.169:8080/img/logo/logo.png" alt="yesilbilisim" />
        </a>
        <ul 
            className="flex items-center justify-center text-black font-semibold text-[16px] gap-4 
                max-med:-left-full max-med:absolute max-med:flex-col max-med:top-16 max-med:w-full max-med:text-center max-med:bg-main-gray-2 max-med:text-main-black max-med:py-2"  
            id="navbar"
        >
            <li className="mx-4 hover:bg-main-gray max-med:hover:bg-transparent rounded-md">
                <a href="/">Anasayfa</a>
            </li>
            <li className="mx-4 hover:bg-main-gray max-med:hover:bg-transparent rounded-md">
                <a href="/hakkimizda">Hakkımızda</a>
            </li>
            <li className="mx-4 hover:bg-main-gray max-med:hover:bg-transparent rounded-md">
                <a href="/urunler">Ürünlerimiz</a>
            </li>
            <li className="mx-4 hover:bg-main-gray max-med:hover:bg-transparent rounded-md">
                <a href="/blog">Blog</a>
            </li>
            <li className="mx-4 hover:bg-main-gray max-med:hover:bg-transparent rounded-md">
                <a href="/hizmetler">Çözümlerimiz</a>
            </li>
        </ul>
        <div className="flex items-center justify-center h-full max-med:hidden">
            <button className="flex justify-center items-center bg-main-blue text-white font-semibold rounded-lg px-2 py-3 text-[14px]">
                İletişime Geç
            </button>
        </div>
        <button
            className="material-icons-round text-[30px] hidden max-med:inline ml-auto mr-2"
            onClick={hamburgerMenu}>
            menu
        </button>
    </nav>
  )
}

export default Navbar;