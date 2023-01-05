function navbar() {
  return (
    <nav className="bg-white flex h-16 w-full">
        <div className="flex items-center justify-center w-1/4">
            <img src={require('../assets/logo.png')} className="w-[200px]" alt="yesilbilisim" />
        </div>
        <div className="flex items-center justify-center w-2/4">
            <ul className="flex items-center justify-center w-full text-black font-semibold text-[13px]">
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="#">Anasayfa</a>
                </li>
                <li className="mx-4 hover:bg-main-gray px-2 py-1.5 rounded-md">
                    <a href="#">Hakkımızda</a>
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
            <ul className="text-white font-semibold text-[13px] ">
              <li className="mx-4 bg-main-blue px-5 py-2 rounded-lg">
                  <a href="#" className="">İletişime Geç</a>
              </li>
            </ul>
        </div>
    </nav>
  )
}

export default navbar;