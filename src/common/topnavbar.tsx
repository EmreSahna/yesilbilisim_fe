function topnavbar() {
    return (
      <div className="bg-main-gray h-10 w-full max-small:hidden">
        <div className="max-w-[1170px] mx-auto h-full flex items-center justify-between">
            <div className="flex h-full items-center justify-center">
                <div className="flex gap-1 mx-2 items-center">
                    <i className="material-icons-round text-main-blue text-[16px] flex items-center">phone</i>
                    <div className="w-[125px]">
                        <img src="http://localhost:8080/img/tel.png" alt="telefon" className="w-full h-full object-contain" />
                    </div>
                </div>
                
                <div className="flex gap-1 mx-2 items-center">
                    <i className="material-icons-round text-main-blue text-[16px] flex items-center">send</i>
                    <p className="text-main-black text-[14px]">info@yesilbilisim.net</p>
                </div>
            </div>
            <div className="flex h-full gap-4">
                <div className="bg-main-blue w-fit px-4 h-full flex items-center text-main-gray">
                    <a href="/sss">S.S.S</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default topnavbar;