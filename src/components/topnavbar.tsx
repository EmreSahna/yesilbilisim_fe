function topnavbar() {
    return (
      <div className="bg-main-gray-2 flex h-8 w-full">
        <div className="flex ml-12 items-center">
            <ul className="flex">
                <li className="mx-1">  
                    <a href="#">
                        <img src={require('../assets/wp.png')} className="w-[24px] h-[24px]" alt="" />
                    </a>
                </li>
                <li className="mx-1">
                    <a href="#">
                        <img src={require('../assets/medium.png')} className="w-[24px] h-[24px]" alt="" />
                    </a>
                </li>
                <li className="mx-1">
                    <a href="#">
                        <img src={require('../assets/linkedin.png')} className="w-[24px] h-[24px]" alt="" />        
                    </a>
                </li>
            </ul>
        </div>
        <div className="flex items-center ml-auto pr-8">
            <ul className="flex text-[12px]">
                <li className="mx-2 flex">
                    <img src={require('../assets/mail_1.png')} className="w-[18px] h-[18px] mr-1" alt="" />
                    <span>info@yesilbilisim.net</span>
                </li>
                <li className="mx-2 flex">
                    <img src={require('../assets/phone_1.png')} className="w-[18px] h-[18px] mr-1" alt="" />
                    <span>0 (541) 800 7294</span>
                </li>
            </ul>
        </div>
      </div>
    )
  }
  
  export default topnavbar;