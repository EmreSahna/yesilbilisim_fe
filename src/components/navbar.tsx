function navbar() {
  return (
    <nav className="bg-gray-900 text-white fixed w-full">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <a href="#" className="text-xl font-bold">My Site</a>
            <ul className="flex">
                <li className="mr-6"><a href="#">Home</a></li>
                <li className="mr-6"><a href="#">About</a></li>
                <li className="mr-6"><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default navbar;

//<img src={require('../assets/images/logo_1_2.png')} className="w-[196px]" alt="yesilbilisim" />